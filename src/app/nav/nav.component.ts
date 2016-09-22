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
  styles: [`
    /* :host is a flex item but no need to be a flex container */
    :host {
      flex: 1;
      padding: 1em;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    li {
      margin: 0;
      padding: 0.875em 0;
    }
    nav a {
      font-size: 0.875em;
      padding: 10px;
      text-decoration: none;
      background-color: #343531;
      border-radius: 4px;
    }
    nav a:visited, a:link {
      color: #5EA0B6;
    }
    nav a:hover {
      color: #73CBE6;
      background-color: #666963;
    }
    nav a.active {
      color: #73CBE6;
      background-color: #4d504a;
    }
  `]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
