import {ChangeDetectionStrategy ,Component, ViewChild, ElementRef, OnInit, Input, ContentChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Table } from 'jspdf-autotable';
import { PaginationInstance } from 'ngx-pagination';
import { MenuItem } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BehaviorSubject } from 'rxjs';
import { ListCaptionConfig, ListHeader, OnDeleteEvent } from 'src/app/shared/models/List.model';
import { HelpersService } from 'src/app/shared/services/helpers.service';
import { UndoDeleteDialogService } from 'src/app/shared/services/undo-delete-dialog.service';

@Component({
  selector: 'd-table',
  templateUrl: './d-table.component.html',
  styleUrls: ['./d-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DTableComponent implements OnInit {











  showothersbotens: boolean = false;
  showothersbotensf() {
    this.showothersbotens = !this.showothersbotens;
  }

  caprion_col_1!: number;
  caprion_col_2!: number;
  width = 0;
  private widthSubject = new BehaviorSubject<number>(0);


  @Input() data: any = [];
  @Input() cols: ListHeader[] = [];
  @Input() selectedCols: any = [];
  @Input() rows: any = 10;
  @Input() grid: boolean = true;
  @Input() captionConfig!: ListCaptionConfig;


  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }
  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.columns.filter((col: any) => {
      return val.includes(col);
    });
  }

  @Input() items: string[] = [];
  sortedItems: string[] = [];

  sort(direction: 'asc' | 'desc') {
    this.sortedItems = this.items.sort((a, b) => {
      if (direction === 'asc') { return a.localeCompare(b); }
       else { return b.localeCompare(a); }
    });
  }

  @ViewChild('searchInput') searchInput!: ElementRef;
  @ViewChild('tableBody') tableBody!: ElementRef;

  finalData: any[]=[];
    outDataf(a:any){
       this.finalData = a;
    }

  ngOnInit(): void {}
  outData: any[] = []
  ngAfterViewInit() {}
  outDataFunction(i: any) { this.outData = i}

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 99
  };



  @ViewChild('dt') dataTable!: Table;
  @ContentChild('expandedRow', { static: false })
  public expandedRow!:     TemplateRef<any>;
  @Output() onEditClick:   EventEmitter<any> = new EventEmitter();
  @Output() onDetailClick: EventEmitter<any> = new EventEmitter();
  @Output() onCloneClick:  EventEmitter<any> = new EventEmitter();
  @Output() onAddClick:    EventEmitter<any> = new EventEmitter();
  @Output() onDelete:      EventEmitter<OnDeleteEvent> = new EventEmitter();
  showColumn: string = 'up';
  columns: any[] = [];
  selectedItems: any = [];
  speedDialItems: any[] = [];
  selected: any;
  firstTime: any = true;
  currentWidth: number = window.innerWidth;
  showshowCurrentPageReport: boolean = true;
  currentPageReportTemplate: string = '{first} to {last}';
  initSpeedDialItems: MenuItem[] = [
    {
      id: 'csv',
      icon: 'pi pi-file',
      tooltipOptions: {
        tooltipLabel: 'export CSV',
        tooltipPosition: 'top',
      },
      // command: () => {
      //   this.dataTable.exportCSV();
      // },
    },
    {
      id: 'xls',
      icon: 'pi pi-file-excel',
      tooltipOptions: {
        tooltipLabel: 'export XLS',
        tooltipPosition: 'top',
      },
      // command: () => {
      //   this.exportExcel();
      // },
    },
    {
      id: 'pdf',
      icon: 'pi pi-file-pdf',
      tooltipOptions: {
        tooltipLabel: 'export PDF',
        tooltipPosition: 'top',
      },
      // command: () => {
      //   this.exportPdf();
      // },
    },
    {
      id: 'selection',
      icon: 'pi pi-filter',
      tooltipOptions: {
        tooltipLabel: 'export selection only',
        tooltipPosition: 'top',
      },
      // command: () => {
      //   this.dataTable.exportCSV({ selectionOnly: true });
      // },
    },
  ];
  globalFilterFields: string[] = [];
  demiRows = 0;
  _selectedColumns: any[] = [];
  exportColumns: any[] = [];
  changes: any = null;
  regex = /\{\{\s*data\.length\s*\}\}/g;
  initialCaptionConfig: ListCaptionConfig = {
    globalFilter: true,
    csv: false,
    pdf: false,
    xls: false,
    selection: false,
    displayedColumns: false,
    clearTable: true,
    refreshData: false,
    addButton: false,
    expanded: null,
    selectionType: 'single',
    summary: {
      enabled: true,
      message: 'In total there are {{data.length}} elements.',
    },
    buttons: [],
    actions: {
      clone: false,
      delete: false,
      edit: false,
      detail: false,
    },
  };
  constructor(
    private undoDialogService: UndoDeleteDialogService,
    public ref: DynamicDialogRef,
    public D_config: DynamicDialogConfig,
    public translateService: TranslateService,
    public helpers: HelpersService
  ){}










}






























