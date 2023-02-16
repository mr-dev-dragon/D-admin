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
  zoomedImag: boolean= false;
  zoomedImagsrc: string = '';
  zoomedImagindex  : number = 0
  zoomedImagModalsrc: any = '';
  zoomedImagModalindex: number = 0
  show_file_data: boolean = false

  imageClikEvent(i: any, n: number,k?:boolean) {
  if(!k){
     this.zoomedImag = true;
     this.zoomedImagsrc=i
     this.zoomedImagindex = n
  }else {

    this.zoomedImag = false;
    this.zoomedImagsrc = ''
    this.zoomedImagindex = -1
    this.show_file_data =true
    this.zoomedImagModalsrc = i
    this.zoomedImagModalindex = n

  }
}

  imageClikEvent_Close(){
    this.show_file_data = false
    this.zoomedImagModalsrc = ''
    this.zoomedImagModalindex = -1
  }

  imagemouseleaveEvent(){
    this.zoomedImag = false;
    this.zoomedImagsrc = ''
    this.zoomedImagindex = -1
  }
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


  outData: any[] = []
  ngAfterViewInit() {}
  outDataFunction(i: any) { this.outData = i}

  public o_config: PaginationInstance = {
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
    public config: DynamicDialogConfig,
    public translateService: TranslateService,
    public helpers: HelpersService
  ) {


    if (this.config.data?.headers) {
      this.captionConfig = {
        ...this.initialCaptionConfig,
        ...this.config.data.captionConfig,
      };
      this.cols = this.config.data.headers || [];
      this.data = this.config.data.data;
      this.selectedItems = this.data.filter((item: any) => item.selected);
      if (
        this.captionConfig?.selectionType == 'single' &&
        this.selectedItems.length
      )
        this.selectedItems = this.selectedItems[0];
      this.translateService
        .get(this.config.header || '')
        .subscribe((translation) => {
          this.config.header = translation;
        });
    }

  }




    ngDoCheck() {
      if (this.changes) {
        this.columns = [...this.cols];
        this.columns = [...this._selectedColumns] = this.columns.map(
          (col: any) => {
            let val = { ...col };
            if (typeof val.header == 'object') {
              if (typeof val.header.data == 'object' && val.header.data.length) {
                val.header =
                  val.header.data.find(
                    (d: any) => d.language == localStorage.getItem('lang')
                  )?.value || val.header.data[0].value;
              } else val.header = val.header.data.value;
            }
            return val;
          }
        );
        if (this.changes.captionConfig) {
          const mergeCaptionConfigs = (
            newCaptionConfig: any,
            initConfig: any
          ) => {
            Object.keys(newCaptionConfig).forEach((key) => {
              if (initConfig[key] !== undefined) {
                if (
                  initConfig[key] &&
                  typeof initConfig[key] == 'object' &&
                  !(initConfig[key] instanceof Array)
                ) {
                  initConfig[key] = mergeCaptionConfigs(
                    newCaptionConfig[key],
                    initConfig[key]
                  );
                } else {
                  initConfig[key] = newCaptionConfig[key];
                }
              }
            });
            return initConfig;
          };
          this.captionConfig = mergeCaptionConfigs(
            this.captionConfig,
            this.helpers.newObject(this.initialCaptionConfig)
          );
        } else if (!this.captionConfig) {
          this.captionConfig = this.initialCaptionConfig;
        }
        this.speedDialItems = this.initSpeedDialItems.filter((item: any) => {
          // @ts-ignore
          return this.captionConfig[item.id];
        });
        this.globalFilterFields = this.cols.map((col) => col.field);
        this.changes = null;
      }
      // if (this.dataTable && this.dataTable) {
      //   this.selectedCols.splice(
      //     0,
      //     this.selectedCols.length,
      //     ...this.dataTable._columns
      //   );
      // }
    }



    showColumnDtaills(index: number) {
      this.showColumn == 'up'
        ? (this.showColumn = 'down')
        : (this.showColumn = 'up');
    }
    onAdd() {
      this.onAddClick.emit();
    }
    onEdit(index: number) {
      this.onEditClick.emit(this.data[index]);
    }
    onDetail(index: number) {
      this.onDetailClick.emit(this.data[index]);
    }
    onClone(index: number) {
      this.onCloneClick.emit(this.data[index]);
    }
    test(event: any) {
      this._selectedColumns = event.value;
    }

  ngOnInit(): void {
      this.widthSubject.next(window.innerWidth);
      window.addEventListener('resize', () => {
        this.widthSubject.next(window.innerWidth);
      });




    this.demiRows = Math.floor(this.rows / 2);
    this.columns = [];
    this.cols.map((col: any) => {
      this.columns.push({ ...col });
    });
    this._selectedColumns = [];
    this.columns.map((col: any) => {
      this._selectedColumns.push({ ...col });
    });
    this.exportColumns = this.columns?.map((col: any) => ({
      title: col.header,
      dataKey: col.field,
    }));



  }

  changeState() {
    this.onDelete.emit({
      id: this.selectedItems.length
        ? this.selectedItems.map((item: any) => item._id)
        : [this.selectedItems?._id],
      etat: 'etatObjet.archive',
    });
    this.selectedItems = [];
  }
  showUndoDialog() {
    this.undoDialogService.showDialog((event) => {
      if (event.result == 'timeout') {
        this.changeState();
      }
    }, 2);
  }
  clear(table?: any) {
    this._selectedColumns = this.columns;
    // table.clear();
  }
  saveSelectedItems() {
    this.ref.close(this.selectedItems);
  }
  onRowExpand(itemSelected: any) {
    console.log('itemSelected.data', itemSelected.data);
    this.firstTime = false;
    this.selected = itemSelected.data._id;
    console.log('🚀 ~ ~  this.selected', this.selected);
  }

  maxwidth(val: number) {
    if (this.currentWidth < val) return true;
    else return false;
  }
  minwidth(val: number) {
    if (this.currentWidth > val) return true;
    else return false;
  }
}






























