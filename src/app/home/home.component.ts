import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>{{title}}</h1>
    <p>Home Component</p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  title = 'Convofeeder';

  constructor() { }

  ngOnInit() {
  }

}
