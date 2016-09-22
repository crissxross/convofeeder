import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-npc',
  template: `
    <div class="npc-speaks">
      <p>{{ npcSpeaks | async }}</p>
      <p>npc speaks for TESTing! This is a 'p' in a 'div'.</p>
    </div>
  `,
  styles: [`
    /* npc is a flex container */
    :host {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      /* also a flex item */
      flex: 1;
      color: #121111;
      background-color: #989295;
      padding: 1em;
      border-radius: 10px;
    }
  `]
})
export class NpcComponent implements OnInit {
  @Input() npcSpeaks;

  constructor() { }

  ngOnInit() {
  }

}
