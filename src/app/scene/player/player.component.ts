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
  styleUrls: ['player.component.css']
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
