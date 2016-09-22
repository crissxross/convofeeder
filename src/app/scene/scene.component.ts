import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scene',
  template: `
    <app-npc>
    </app-npc>
    <app-player>
    </app-player>

    <!-- extra is only for testing -->
    <div class="extra">
    <small>Scene {{ (scdata | async).sc.meta.id }} description:
      {{ (scdata | async).sc.meta.description }}
      Actors: {{ (scdata | async).sc.meta.actors }}
      <pre>{{ scdata | async | json }}</pre>
      </small>
    </div>
  `,
  styles: [`
    /* scene is a flex container */
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      /*background-color: #3D3D32;*/
    }

    .extra {
      color: #8e8e8e;
      position: absolute;
      top: 740px;
    }
  `]
})
export class SceneComponent implements OnInit {
  scdata;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // scdata stores all of the scene data resolved by the router.
  ngOnInit() {
    this.scdata = this.route.data;
  }

}
