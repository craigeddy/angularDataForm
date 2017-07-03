import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  model = new Book(1, 'foo', '', 'http://')

  constructor() { }

  ngOnInit() {
  }

  get currentBookAsJSON() { return JSON.stringify(this.model); }
}
