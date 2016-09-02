import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../shared/book-data.service';
import { Book } from '../shared/book';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private bookData: BookDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .flatMap(params => this.bookData.getBook(params['isbn']))
      .subscribe(book => this.book = book);
  }

}
