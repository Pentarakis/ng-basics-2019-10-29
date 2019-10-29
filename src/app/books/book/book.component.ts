import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngb-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  buttonActive = false;
  buttonText = 'Click me';

  constructor() { }

  ngOnInit() {
  }

  changeButton() {
    this.buttonActive = !this.buttonActive;
  }

}
