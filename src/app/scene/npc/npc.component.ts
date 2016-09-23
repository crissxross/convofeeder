import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-npc',
  template: `
    <div class="npc-speaks">
      <p>{{ npcSpeaks | async }}</p>
      <p>npc speaks for TESTing! This is a 'p' in a 'div'.</p>
    </div>
  `,
  styleUrls: ['npc.component.css']
})
export class NpcComponent implements OnInit {
  @Input() npcSpeaks;

  constructor() { }

  ngOnInit() {
  }

}
