import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component'
import { BookDetailComponent } from './book-detail/book-detail.component'

export const appRoutes: Routes = [
  { path: 'books/:isbn', component: BookDetailComponent },
  { path: '**', component: BookListComponent }
];
export const routing = RouterModule.forRoot(appRoutes);