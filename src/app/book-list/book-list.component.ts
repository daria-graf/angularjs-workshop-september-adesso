import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() title: string;
  @Output() titleClicked = new EventEmitter<string>();
  isHidden: boolean;
  x: number;
  y: number;
  books: Book[];

  constructor(private bookData: BookDataService) {
    this.isHidden = true;
    bookData.getBooks().subscribe((books) => {
      this.books = books;
    });
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
