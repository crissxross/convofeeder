import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scene',
  template: `
    <app-npc></app-npc>
    <app-player></app-player>
      <!-- more complex npc & player comps copied from conversengine -->
        <!--
        <app-npc
          [npcSpeaks]="npcSpeaks"
        >
        </app-npc>
        <app-player
          [playerSpeaks]="playerSpeaks"
          [playerThinks]="playerThinks"
          [playerOptions]="playerOptions"
          (selectOption)="selectOption(option)"
          >
        </app-player>
      -->

    <!-- extra is only for testing -->
    <div class="extra">
      <p>Scene {{ (meta | async).id }} description:
      {{ (meta | async).description }}
      Actors: {{ (meta | async).actors }}</p>
      <p><em>NPC says:</em> {{ (convo | async)[0].says[0][1] }}</p>
      <pre>{{ scdata | async | json }}</pre>
    </div>
  `,
  styleUrls: ['scene.component.css']
})
export class SceneComponent implements OnInit {
  scdata;
  meta;
  convo;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // scdata stores all of the scene data resolved by the router.
  ngOnInit() {
    this.scdata = this.route.data;
    this.meta = this.scdata.map(data => data.sc.meta);
    this.convo = this.scdata.map(data => data.sc.convo);
  }

}
