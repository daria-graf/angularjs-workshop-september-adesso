import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Output() titleClicked = new EventEmitter<string>();
  isHidden: boolean  = true;
  x: number;
  y: number;
  books: Book[];
  booksSubscription: Subscription;

  constructor(private bookData: BookDataService) {}

  ngOnInit() {
    this.booksSubscription = this.bookData.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

  onMousemove({offsetX, offsetY}: MouseEvent) {
    this.x = offsetX;
    this.y = offsetY;
  }

  sendTitleClicked() {
    this.titleClicked.emit('Event fired!')
  }
}
