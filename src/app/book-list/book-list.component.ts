import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  isHidden: boolean;

  constructor() {
    this.isHidden = true;
  }

  ngOnInit() {
  }

}
