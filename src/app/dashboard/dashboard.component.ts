import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard">
    <h5>Dashboard</h5>
    <p>Scene metadata: </p>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      /* it's a flex item */
      flex: 1;
      padding: 1em;
      /*border: 1px solid #000;*/
      color: #8e8e8e;
    }

    h5 {
      margin-top: 0;
      text-align: center;
    }
    p {
      font-size: 0.75em;
    }
  `]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
