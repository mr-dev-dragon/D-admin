import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';

@Component({
  selector: 'd-table',
  templateUrl: './d-table.component.html',
  styleUrls: ['./d-table.component.scss']
})
export class DTableComponent implements OnInit {
  @ViewChild('searchInput') searchInput!: ElementRef;
  @ViewChild('tableBody') tableBody!: ElementRef;
  @Input() data :any[]=[];
  constructor() {}
  ngOnInit(): void {




  }
outData:any[]=[]
  ngAfterViewInit() {}
  outDataFunction(i:any){
    this.outData = i
  }
}


