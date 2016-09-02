import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookDataService]
})
export class BookListComponent implements OnInit {
  @Input() title: string;
  @Output() titleClicked = new EventEmitter<string>();
  isHidden: boolean;
  x: number;
  y: number;
  books: any[] = []

  constructor(private bookData: BookDataService) {
    this.isHidden = true;
    this.books = bookData.getBooks();
  }

  onMousemove({offsetX, offsetY}: MouseEvent) {
    this.x = offsetX;
    this.y = offsetY;
  }

  sendTitleClicked() {
    this.titleClicked.emit('Event fired!')
  }

  ngOnInit() {
  }
}
