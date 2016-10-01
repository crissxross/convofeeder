import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-npc',
  template: `
    <div class="npc-speaks">
      <!-- <p>{{ npcSays | async }}</p> -->
      <p>{{ npcSays }}</p>
      <!-- <p>npc speaks for TESTing! This is a 'p' in a 'div'.</p> -->
    </div>
  `,
  styleUrls: ['npc.component.css']
})
export class NpcComponent implements OnInit {
  @Input() npcSays;
  // @Input() npcSpeaks;

  constructor() { }

  ngOnInit() {
  }

}
