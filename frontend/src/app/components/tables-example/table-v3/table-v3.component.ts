



import { Component } from '@angular/core';
import { ListCaptionConfig, ListHeader } from 'src/app/shared/models/List.model';

@Component({
  selector: 'app-table-v3',
  templateUrl: './table-v3.component.html',
  styleUrls: ['./table-v3.component.scss']
})
export class TableV3Component { 
  cols: ListHeader[] = [
    {
      field: 'first_name',
      header: 'first name',
      sort: true,
      filter: true,
      filterType: 'text',
      filterData: [],
    },
    {
      field: 'last_name',
      header: 'last name',
      sort: true,
      filter: true,
      filterType: 'text',
      filterData: [],
    },
    {
      field: 'email',
      header: 'email',
      sort: true,
      filter: true,
      filterType: 'text',
      filterData: [],
    },
    {
      field: 'gender',
      header: 'gender',
      sort: true,
      filter: true,
      filterType: 'text',
      filterData: [],
    },
    {
      field: 'car',
      header: 'car',
      sort: true,
      filter: true,
      filterType: 'text',
      filterData: [],
    },
    {
      field: 'country',
      header: 'country',
      sort: true,
      filter: true,
      filterType: 'text',
      filterData: [],
    },
    {
      field: 'country_code',
      header: 'country code',
      sort: true,
      filter: true,
      filterType: 'text',
      filterData: [],
    },
    {
      field: 'company',
      header: 'company',
      sort: true,
      filter: true,
      filterType: 'text',
      filterData: [],
    },
  ];

  dummyDate: any[] = [
    {
      _id: 1,
      first_name: 'Bryant',
      last_name: 'Gomes',
      email: 'bgomes0@reddit.com',
      gender: 'Male',
      car: 'Infiniti',
      car_model: 2003,
      ctiy: 'Jerada',
      country: 'Morocco',
      country_code: 'MA',
      company: 'Safetec of America, Inc.',
    },
    {
      _id: 2,
      first_name: 'Julita',
      last_name: 'Antoney',
      email: 'jantoney1@symantec.com',
      gender: 'Female',
      car: 'Jaguar',
      car_model: 2009,
      ctiy: 'Orléans',
      country: 'France',
      country_code: 'FR',
      company: 'Uriel Pharmacy Inc.',
    },
    {
      _id: 3,
      first_name: 'Nap',
      last_name: 'Hackforth',
      email: 'nhackforth2@fotki.com',
      gender: 'Male',
      car: 'Chevrolet',
      car_model: 2004,
      ctiy: 'Taounate',
      country: 'Morocco',
      country_code: 'MA',
      company: 'CHAIN DRUG MARKETING ASSOCIATION INC',
    },
    {
      _id: 4,
      first_name: 'Viole',
      last_name: 'Briiginshaw',
      email: 'vbriiginshaw3@t.co',
      gender: 'Female',
      car: 'Land Rover',
      car_model: 2001,
      ctiy: 'Paris La Défense',
      country: 'France',
      country_code: 'FR',
      company: 'RUGBY LABORATORIES, INC.',
    },
    {
      _id: 5,
      first_name: 'Chere',
      last_name: 'Laden',
      email: 'claden4@smh.com.au',
      gender: 'Female',
      car: 'Infiniti',
      car_model: 2006,
      ctiy: 'Saint-Julien-en-Genevois',
      country: 'France',
      country_code: 'FR',
      company: 'Taro Pharmaceuticals U.S.A., Inc.',
    },
    {
      _id: 6,
      first_name: 'Nigel',
      last_name: 'Odger',
      email: 'nodger5@meetup.com',
      gender: 'Male',
      car: 'Infiniti',
      car_model: 2003,
      ctiy: 'Amboise',
      country: 'France',
      country_code: 'FR',
      company: 'State of Florida DOH Central Pharmacy',
    },
    {
      _id: 7,
      first_name: 'Hakim',
      last_name: 'Beades',
      email: 'hbeades6@ask.com',
      gender: 'Male',
      car: 'BMW',
      car_model: 2006,
      ctiy: 'Levallois-Perret',
      country: 'France',
      country_code: 'FR',
      company: 'Walgreen Company',
    },
    {
      _id: 8,
      first_name: 'Hayley',
      last_name: 'Marcu',
      email: 'hmarcu7@privacy.gov.au',
      gender: 'Female',
      car: 'Ford',
      car_model: 2006,
      ctiy: 'Rabat',
      country: 'Morocco',
      country_code: 'MA',
      company: 'REMEDYREPACK INC.',
    },
    {
      _id: 9,
      first_name: 'Alexio',
      last_name: 'Barge',
      email: 'abarge8@hc360.com',
      gender: 'Male',
      car: 'Buick',
      car_model: 1986,
      ctiy: 'Roanne',
      country: 'France',
      country_code: 'FR',
      company: 'Cardinal Health',
    },
    {
      _id: 10,
      first_name: 'Lucias',
      last_name: 'Coch',
      email: 'lcoch9@yellowpages.com',
      gender: 'Male',
      car: 'Dodge',
      car_model: 2002,
      ctiy: 'Bobigny',
      country: 'France',
      country_code: 'FR',
      company: 'Moore Medical LLC',
    },
    {
      _id: 11,
      first_name: 'Orren',
      last_name: 'Bims',
      email: 'obimsa@pinterest.com',
      gender: 'Polygender',
      car: 'Saturn',
      car_model: 2001,
      ctiy: 'Pontarlier',
      country: 'France',
      country_code: 'FR',
      company: 'Accord Healthcare Inc.',
    },
    {
      _id: 12,
      first_name: 'Harlan',
      last_name: 'Casella',
      email: 'hcasellab@technorati.com',
      gender: 'Male',
      car: 'Buick',
      car_model: 1988,
      ctiy: 'Saint-Quentin-en-Yvelines',
      country: 'France',
      country_code: 'FR',
      company: 'ANIP Acquisition Company',
    },
    {
      _id: 13,
      first_name: 'Beverie',
      last_name: 'Oakley',
      email: 'boakleyc@friendfeed.com',
      gender: 'Female',
      car: 'Mercury',
      car_model: 1997,
      ctiy: 'Cergy-Pontoise',
      country: 'France',
      country_code: 'FR',
      company: 'BioActive Nutritional, Inc.',
    },
    {
      _id: 14,
      first_name: 'Paquito',
      last_name: 'Silliman',
      email: 'psillimand@nyu.edu',
      gender: 'Male',
      car: 'Chevrolet',
      car_model: 1963,
      ctiy: 'Aviles',
      country: 'Spain',
      country_code: 'ES',
      company: 'Oral-B Laboratories',
    },
    {
      _id: 15,
      first_name: 'Reggy',
      last_name: 'Pane',
      email: 'rpanee@soundcloud.com',
      gender: 'Male',
      car: 'Chevrolet',
      car_model: 2006,
      ctiy: 'Bressuire',
      country: 'France',
      country_code: 'FR',
      company: 'Target Corporation',
    },
    {
      _id: 16,
      first_name: 'Madge',
      last_name: 'Caramuscia',
      email: 'mcaramusciaf@unesco.org',
      gender: 'Female',
      car: 'Pontiac',
      car_model: 1986,
      ctiy: 'Reims',
      country: 'France',
      country_code: 'FR',
      company: 'Elizabeth Arden, Inc',
    },
    {
      _id: 17,
      first_name: 'Scarface',
      last_name: 'Salling',
      email: 'ssallingg@barnesandnoble.com',
      gender: 'Male',
      car: 'GMC',
      car_model: 1994,
      ctiy: 'Longjumeau',
      country: 'France',
      country_code: 'FR',
      company: 'Home Sweet Homeopathics',
    },
    {
      _id: 18,
      first_name: 'Valaria',
      last_name: 'Sapir',
      email: 'vsapirh@hibu.com',
      gender: 'Female',
      car: 'Honda',
      car_model: 1995,
      ctiy: 'Annecy',
      country: 'France',
      country_code: 'FR',
      company: 'Janssen Pharmaceuticals, Inc.',
    },
    {
      _id: 19,
      first_name: 'Laure',
      last_name: 'Di Biaggi',
      email: 'ldibiaggii@cdbaby.com',
      gender: 'Female',
      car: 'GMC',
      car_model: 2011,
      ctiy: 'Donostia-San Sebastian',
      country: 'Spain',
      country_code: 'ES',
      company: 'ViiV Healthcare Company',
    },
    {
      _id: 20,
      first_name: 'Nappie',
      last_name: 'Maywood',
      email: 'nmaywoodj@statcounter.com',
      gender: 'Male',
      car: 'Toyota',
      car_model: 2001,
      ctiy: 'Paris 10',
      country: 'France',
      country_code: 'FR',
      company: 'Mylan Institutional Inc.',
    },
  ];
  captionConfig: ListCaptionConfig = {
    globalFilter: true,
    csv: true,
    pdf: true,
    xls: true,
    selection: true,
    displayedColumns: true,
    clearTable: true,
    refreshData: true,
    addButton: true,
    selectionType: 'multiple',
    summary: {
      enabled: true,
      message: ' In Total there are {{data.length}} elements .',
    },
    expanded: {},
    actions: {
      clone: true,
      delete: true,
      edit: true,
      detail: true,
    },
  };
  darkMode: any;
  onEditClick(i: any) { }
  onDetailClick(i: any) { }
  onCloneClick(i: any) { }
  onAddClick(i: any) { }
  onDelete(i: any) { }
  ngDoCheck(): void {
    this.darkMode = JSON.parse(sessionStorage.getItem('darkMode') || 'false');
    console.log(this.darkMode);
  }
}
