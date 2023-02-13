import { Component } from '@angular/core';

@Component({
  selector: 'app-table-v5',
  templateUrl: './table-v5.component.html',
  styleUrls: ['./table-v5.component.scss']
})
export class TableV5Component {
 data = [
  {
    _id: 1,
    img: "Zinzu Chan Lee",
    fullname: "Zinzu Chan Lee",
    address: "Kathmandu",
    date: "27 Aug, 2023",
    stat: "Cancelled",
    number: "$5350.50"
  },
  {
    _id: 2,
    img: "Jeet Saru",
    fullname: "Jeet Saru",
    address: "Kathmandu",
    date: "27 Aug, 2023",
    stat: "Cancelled",
    number: "$5350.50"
  },
  {
    _id: 3,
    img: "Sonal Gharti",
    fullname: "Sonal Gharti",
    address: "Tokyo",
    date: "14 Mar, 2023",
    stat: "Shipped",
    number: "$210.40"
  },
  {
    _id: 4,
    img: "Alson GC",
    fullname: "Alson GC",
    address: "New Delhi",
    date: "25 May, 2023",
    stat: "Delivered",
    number: "$149.70"
  },
  {
    _id: 5,
    img: "Sarita Limbu",
    fullname: "Sarita Limbu",
    address: "Paris",
    date: "23 Apr, 2023",
    stat: "Pending",
    number: "$399.99"
  },
  {
    _id: 6,
    img: "Alex Gonley",
    fullname: "Alex Gonley",
    address: "London",
    date: "23 Apr, 2023",
    stat: "Cancelled",
    number: "$399.99"
  },
  {
    _id: 7,
    img: "Alson GC",
    fullname: "Jeet Saru",
    address: "New York",
    date: "20 May, 2023",
    stat: "Delivered",
    number: "$399.99"
  },
  {
    _id: 8,
    img: "Sarita Limbu",
    fullname: "Aayat Ali Khan",
    address: "Islamabad",
    date: "30 Feb, 2023",
    stat: "Pending",
    number: "$149.70"
  },
  {
    _id: 9,
    img: "Alex Gonley",
    fullname: "Alson GC",
    address: "Dhaka",
    date: "22 Dec, 2023",
    stat: "Cancelled",
    number: "$249.99"
  },
]
}
