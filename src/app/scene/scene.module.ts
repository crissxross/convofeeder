import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';

import { SceneComponent } from './scene.component';
import { NpcComponent } from './npc/npc.component';
import { PlayerComponent } from './player/player.component';
import { sceneRouting } from './scene.routing';

@NgModule({
  imports: [
    CommonModule,
    // SharedModule,
    sceneRouting
  ],
  declarations: [
    SceneComponent,
    NpcComponent,
    PlayerComponent
  ],
  providers: []
})
export class SceneModule { }
