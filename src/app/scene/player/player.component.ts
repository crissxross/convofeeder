import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  template: `
    <div class="player-speaks">
      <!-- <p>{{ playerSays | async }}</p> -->
      <p>{{ playerSays }}</p>
    </div>

    <div class="thinks">
      <!-- <p>{{ playerThinks | async }}</p> -->
      <p>{{ playerThinks }}</p>
    </div>

    <div class="options">
      <ul>
        <!-- <li *ngFor="let option of playerOptions | async">
              <button (click)="onChoose(option)">
                  {{ option[1] }}</button>
        </li> -->
        <li *ngFor="let option of playerOptions">
              <button (click)="onChoose(option)">
                  {{ option[1] }}</button>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() playerSays;
  @Input() playerThinks;
  @Input() playerOptions;
  @Output() chosenOption: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChoose(option) {
    this.chosenOption.emit(option);
    console.log(`selected option emitted is:`, option);
  }

}
