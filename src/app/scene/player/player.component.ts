import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  template: `
    <div class="player-speaks">
      <p>{{ playerSpeaks | async }}</p>
      <p>player speaks to TEST this CSS!</p>
    </div>

    <div class="thinks">
      <p>{{ playerThinks | async }}</p>
      <p>Thinking a thought about TESTing CSS.</p>
    </div>

    <div class="options">
      <ul>
        <li *ngFor="let option of playerOptions | async">
              <button (click)="onChoose(option)">
                  {{ option[1] }}</button>
        </li>
        <!-- Buttons only for TESTing CSS -->
          <li><button>Test option 1 optimal op?</button></li>
          <li><button>Option 2 overkill vk?</button></li>
          <li><button>Test option 3 under-par un? Is option 3 under-par un?</button></li>
      </ul>
    </div>
  `,
  styles: [`
    /* :host player is a flex container */
    :host {
      display: flex;
      flex-direction: column;
      /* also a flex item */
      flex: 1;
      height: 50%;
      color: #2E2E2C;
      background-color: #BFBFB8;
      padding: 1em;
      border-radius: 10px;
    }
    .player-speaks {
      flex: 1;
      color: #2E2E2C;
      /*bg colour for testing only*/
      /*background: rgba(100, 110, 110, 0.5);*/
    }
    /* .thinks is a flex container */
    .thinks {
      display: flex;
      align-items: flex-end;
      /* also a flex item */
      flex: 1;
      font-style: italic;
      /*bg colour for testing only*/
      /*background: rgba(140, 130, 110, 0.5);*/
    }
    .options {
      flex: 1;
      height: 33%;
      /*bg colour for testing only*/
      /*background: rgba(110, 110, 130, 0.5);*/
    }
    /* ul is a flex container for its li */
    ul {
      display: flex;
      list-style: none;
    }
    li {
      /* flex: 1 makes every li take up equal space */
      flex: 1;
      /* I don't think inline-block has any effect */
      /*display: inline-block;*/
    }
    ul, li {
      padding: 0;
      margin: 0;
    }
    button {
      color: #2E2E2C;
      background-color: #ADADA8;
      border: 2px solid #CCB;
      border-radius: 6px;
      padding: 0.4em;
      text-align: left;
      cursor: pointer;
      cursor: hand;
    }
    button:focus, button:hover {
      color: #FEFEF6;
      background-color: #666963;
      border-color: #666963;
      outline: 0;
    }
  `]
})
export class PlayerComponent implements OnInit {
  @Input() playerSpeaks;
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
