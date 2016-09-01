import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() title: string;
  isHidden: boolean;
  x: number;
  y: number;

  constructor() {
    this.isHidden = true;
  }

  onMousemove({offsetX, offsetY}: MouseEvent) {
    this.x = offsetX;
    this.y = offsetY;
  }

  ngOnInit() {
  }

}
