import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
@Component({
  selector: 'd-filter',
  templateUrl: './d-filter.component.html',
  styleUrls: ['./d-filter.component.scss'],
  encapsulation: ViewEncapsulation.None, 
})
export class DFilterComponent implements OnInit, AfterViewInit {
  @Input() type: string | string[] = 'text';
  @Input() label: string | string[] = 'text';
  @Input() path: string | string[] = '';
  @Input() inData!: any[];
  @Output() outData = new EventEmitter();
  @Input() optionLabel!: string[] | any[];
  allmultiSelectData: any[] = [];
  _SelectedData: any[] = [];
  update_value_form_date_input_display: Date = new Date();
  updatevalue(a: any) {
    this.update_value_form_date_input_display = a;
  }

  reusltdataClone: any;
  valuesChips: string[] = [];
  separatorExp: RegExp = /,| /;
  valuesDate!: Date;
  valueNumeric!: number;
  @ViewChild('search') searchInput!: any;
  minDate!: Date;
  maxDate!: Date;
  invalidDates!: Array<Date>;

  randomDates: Date[] = [
    new Date('22-07-2023'),
    new Date('2023-07-01T20:00:00Z'),
    new Date('2023-02-14T00:00:00'),
    new Date('2023-01-01T00:00:00'),
    new Date('2022-05-10'),
    new Date('2021-11-15'),
    new Date('2023-03-01'),
    new Date('2022-06-22'),
    new Date('2022-09-09'),
    new Date('2022-07-04'),
    new Date('2022-12-25'),
    new Date('2023-08-08'),
    new Date('2021-04-15'),
    new Date('2023-01-01'),
    new Date('2023-05-31T12:30:00Z'),
    new Date('2022-02-14T08:15:00Z'),
    new Date('2022-11-30T18:00:00Z'),
    new Date('2021-09-22T10:45:00Z'),
    new Date('2023-07-01T20:00:00Z'),
    new Date('2022-03-15T09:30:00Z'),
    new Date('2021-10-10T15:45:00Z'),
    new Date('2023-06-05T19:30:00Z'),
    new Date('2022-08-20T13:15:00Z'),
    new Date('2022-04-01T11:00:00Z'),
    new Date('2023/04/20'),
    new Date('07/22/2022'),
    new Date('05/30/2022'),

    new Date('14-02-2023'),
    new Date('03/12/2023'),
    new Date('23/11/2021'),
    new Date('2022/11/09'),
    new Date('2023-05-15'),
    new Date('2022-12-03'),
    new Date('15/07/2023'),
    new Date('08/09/2021'),
  ];
  checkIfImage(url: string): boolean {
    const regex = /\.(jpg|png|jpeg|gif|svg|bmp|tiff|webp|raw|psd|ai)$/i;
    return regex.test(url);
  }

  constructor() {}
  ngAfterViewInit(): void {
    this.outData.emit(this.inData);
  }
  ngOnInit(): void {
    this.allmultiSelectData = this.inData;

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];

    this.reusltdataClone = JSON.parse(JSON.stringify(this.inData));
  }
  reusltdata: any = [];
  filterByText() {
    let search = this.searchInput?.nativeElement.value || '';
    if (search != '' && this.path != '' && this.inData) {
      this.inData = this.filter(this.inData, {
        path: this.path,
        filterbythis: search,
      });
      this.outData.emit(this.inData);
    }
    if (search == '') {
      this.outData.emit(this.reusltdataClone);
    }
  }
  filter(data: any[], filter: { path: any; filterbythis: any }) {
    this.reusltdata = data;
    if (filter.filterbythis instanceof Array) {
      if (filter.path instanceof Array) {
        filter?.path.map((i) => {
          this.reusltdata = this.filtererry(
            this.reusltdata,
            filter.filterbythis,
            i
          );
        });
      } else {
        this.reusltdata = this.filtererry(
          this.reusltdata,
          filter.filterbythis,
          filter?.path
        );
      }
    } else {
      if (filter.path instanceof Array) {
        let result = new Set();
        filter.path.map((v) => {
          result = new Set([
            ...result,
            ...this.reusltdata.filter((i: any) => {
              return this.removeAccent(this.g(v, i))
                .toLowerCase()
                .includes(filter.filterbythis.toLowerCase());
            }),
          ]);
        });
        this.reusltdata = [...result];
      } else {
        this.reusltdata = this.reusltdata.filter((i: any) => {
          return this.removeAccent(this.g(filter?.path, i))
            .toLowerCase()
            .includes(filter.filterbythis.toLowerCase());
        });
      }
    }
    return this.reusltdata;
  }
  filtererry(data: any[], CheckboxList: any, label: any) {
    let result = CheckboxList.filter((el: any) => el.nativeElement.checked);
    result = result.length
      ? result
          .reduce((previousValue: any, currentValue: any) => {
            return [
              ...previousValue,
              ...data.filter((val) => {
                return this.removeAccent(this.g(label, val))
                  .toLowerCase()
                  .includes(
                    this.removeAccent(
                      currentValue.nativeElement.value.toLowerCase()
                    )
                  );
              }),
            ];
          }, [])
          .reduce((previousValue: any, currentValue: any) => {
            if (!previousValue.find((val: any) => val.id == currentValue.id))
              previousValue.push(currentValue);
            return previousValue;
          }, [])
      : data;
    return result;
  }
  g(path: string, data: any): any {
    let [current, ...child] = path.split('.');
    if (child?.length) {
      return this.g(child.join('.'), data[current]);
    }
    if (current) {
      return data[current];
    }
    return data;
  }
  removeAccent(s: any) {
    var r = s.toLowerCase();
    r = r.replace(new RegExp('-', 'g'), ' ');
    r = r.replace(new RegExp('_', 'g'), ' ');
    r = r.replace(new RegExp('[àáâãäå]', 'g'), 'a');
    r = r.replace(new RegExp('æ', 'g'), 'ae');
    r = r.replace(new RegExp('ç', 'g'), 'c');
    r = r.replace(new RegExp('[èéêë]', 'g'), 'e');
    r = r.replace(new RegExp('[ìíîï]', 'g'), 'i');
    r = r.replace(new RegExp('ñ', 'g'), 'n');
    r = r.replace(new RegExp('[òóôõö]', 'g'), 'o');
    r = r.replace(new RegExp('œ', 'g'), 'oe');
    r = r.replace(new RegExp('[ùúûü]', 'g'), 'u');
    r = r.replace(new RegExp('[ýÿ]', 'g'), 'y');
    r = r.replace(new RegExp('ç', 'g'), 'c');
    return r;
  }
}
