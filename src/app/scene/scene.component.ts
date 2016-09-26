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
        <h3><em>FEED...</em> {{ (convofeed$ | async | json) }}</h3>
        <h3><em>SIMPLE FEED...</em> {{ (simplefeed$ | async) }}</h3>
        <p>Scene {{ (meta$ | async).id }} description:
        {{ (meta$ | async).description }}
        Actors: {{ (meta$ | async).actors }}</p>
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
  simplefeed$;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // scdata$ stores all of the scene data resolved by the router.
  ngOnInit() {
    this.scdata$ = this.route.data;
    this.meta$ = this.scdata$.map(data => data.sc.meta);
    this.convo$ = this.scdata$.map(data => data.sc.convo);
    // this.npcSays$ = this.getNpcSays(); // TEMP
    // this.playerSays$ = this.getPlayerSays(); // TEMP
    // this.playerThinks$ = this.getPlayerThinks(); // TEMP
    // this.playerOptions$ = this.getPlayerOptions(); // TEMP

    this.startSimpleFeed();
    this.startFeed();
  }

  startSimpleFeed() {
    return this.simplefeed$ = this.convo$.mergeMap(convo => convo)
      .map(turn => turn['says'][0][1])
      .zip(this.timer$, (feed, delay, period) => feed);
      // .zip(this.interval$, (feed, period) => feed);
  }

  startFeed() {
    return this.convofeed$ = this.convo$.mergeMap(convo => convo)
      .zip(this.timer$, (feed, delay, period) => feed)
      .map(turn => this.sortFeed(turn)) // a side effect ???
      .map(turn => turn['actor']);
      // .map(turn => turn['says'][0][1])
      // .zip(this.interval$, (feed, period) => feed);
  }

  // I THINK I might need to use switchMap ???

  sortFeed(turn) { // EXPERIMENTAL, NOT the way
    if (turn.actor === 'player') {
      console.log(`actor is player`);
      if (turn.thinks) {
        this.playerThinks$ = this.getPlayerThinks();
      }
      if (turn.options) {
        this.playerOptions$ = this.getPlayerOptions();
      }
      if (turn.says) {
        this.playerSays$ = this.getPlayerSays();
      }
      return turn;
    } else if (turn.actor === 'npc') {
      console.log(`actor is npc`);
      this.npcSays$ = this.getNpcSays();
      return turn;
    }
  }

  // Would scan help? ?????

// TEMP - this does NOT do what I need
  mergeFeed() {
  return this.convofeed$ = Observable.merge(
      this.npcSays$,
      this.playerThinks$,
      this.playerOptions$,
      this.playerSays$
    ).zip(this.interval$, (feed, period) => feed);
  }

  // TEMP functions below are NOT the way to produce the observables I need

  getNpcSays() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'npc')
      .map(turn => turn['says'][0][1])
      .take(1);
      // .map(turn => turn['says'][0]['op'])
      // .do(x => console.log('getNpcSays:', x))
      // .zip(this.timer$, (says, delay, period) => says);
    // .zip(this.interval$, (says, period) => says);
  }

  getPlayerSays() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['says'][0][1])
      .take(1);
      // .do(x => console.log('getPlayerSays:', x))
      // .zip(this.interval$, (says, period) => says)
      // .delay(2000);
  }

  getPlayerThinks() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['thinks'][0][1])
      .take(1);
      // .do(x => console.log('getPlayerThinks:', x))
      // .zip(this.interval$, (thinks, period) => thinks)
      // .delay(500);
  }

  getPlayerOptions() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['options'])
      .take(1);
      // .do(x => console.log('getPlayerOptions:', x))
      // .zip(this.interval$, (options, period) => options)
      // .delay(1000);
  }

}
