import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav>
      <ul>
        <li>
          <a [routerLink]="['/home']" routerLinkActive="active">Home</a>
        </li>
        <li>
          <a [routerLink]="['/scene', '1']" routerLinkActive="active">Scene 1 </a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
