import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';

// QUERY - how do I clear convo text from view when click to a different scene? ???

@Component({
  selector: 'app-scene',
  template: `
    <app-npc [npcSays]="npcSays$"></app-npc>
    <app-player
          [playerSays]="playerSays$"
          [playerThinks]="playerThinks$"
          [playerOptions]="playerOptions$"
    ></app-player>
      <!-- (selectOption)="selectOption(option)" for app-player ??? -->

    <!-- extra is only for testing -->
      <div class="extra">
        <p>Scene {{ (meta$ | async).id }} description:
        {{ (meta$ | async).description }}
        Actors: {{ (meta$ | async).actors }}</p>
        <p><em>FEED:</em> {{ (convofeed$ | async) }}</p>
        <pre>{{ scdata$ | async | json }}</pre>
      </div>
  `,
  styleUrls: ['scene.component.css']
})
export class SceneComponent implements OnInit {
  scdata$;
  meta$;
  convo$;
  npcSays$;
  playerSays$;
  playerThinks$;
  playerOptions$;
  interval$ = Observable.interval(2000);
  timer$ = Observable.timer(500, 2000);
  convofeed$;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // scdata$ stores all of the scene data resolved by the router.
  ngOnInit() {
    this.scdata$ = this.route.data;
    this.meta$ = this.scdata$.map(data => data.sc.meta);
    this.convo$ = this.scdata$.map(data => data.sc.convo);
    this.npcSays$ = this.getNpcSays();
    this.playerSays$ = this.getPlayerSays();
    this.playerThinks$ = this.getPlayerThinks();
    this.playerOptions$ = this.getPlayerOptions();

// convofeed$ is NOT right but it's interesting
    this.convofeed$ = Observable.merge(
      this.npcSays$,
      this.playerThinks$,
      this.playerOptions$,
      this.playerSays$
    ).zip(this.interval$, (feed, period) => feed);
  }

  // Do I need a shared timing/scheduling observable that all the convo feeds use ???

  getNpcSays() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'npc')
      .map(turn => turn['says'][0][1])
      // .map(turn => turn['says'][0]['op'])
      // .do(x => console.log('getNpcSays:', x))
      .zip(this.timer$, (says, delay, period) => says);
      // .zip(this.interval$, (says, period) => says);
  }

  getPlayerSays() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['says'][0][1])
      // .do(x => console.log('getPlayerSays:', x))
      .zip(this.interval$, (says, period) => says)
      .delay(2000);
  }

  getPlayerThinks() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['thinks'][0][1])
      // .do(x => console.log('getPlayerThinks:', x))
      .zip(this.interval$, (thinks, period) => thinks)
      .delay(500);
  }

  getPlayerOptions() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['options'])
      // .do(x => console.log('getPlayerOptions:', x))
      .zip(this.interval$, (options, period) => options)
      .delay(1000);
  }

}
