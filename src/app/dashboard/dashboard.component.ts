import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Putting scdata info in dashboard does NOT work probably
// because I don't have proper access to router here. If I
// used a second (auxiliary ?) router outlet here, would it work?

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard">
    <h5>Convofeeder Dashboard</h5>
    <p>Scene metadata: </p>
    <!-- <small>Scene {{ (scdata | async).sc.meta.id }} description:
      {{ (scdata | async).sc.meta.description }}
      Actors: {{ (scdata | async).sc.meta.actors }}
      </small> -->
    </div>
  `,
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  scdata;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.scdata = this.route.data;
  }

}
