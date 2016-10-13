/**
 * This file was created by angular-cli 1.0.0-beta.16
 * but I'm not using this.
 * I'm using app.routing.ts which I created before this cli update.
 * Should I adapt this file instead?
 * Or simply rename app.routing.ts to match the name of this file?
 * Or leave as is?
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ConvofeederRoutingModule { }
