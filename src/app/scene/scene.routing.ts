import { Routes, RouterModule } from '@angular/router';
// should this use ModuleWithProviders? see docs
import { SceneResolveService } from '../core/scene-resolve.service';

import { SceneComponent } from './scene.component';

const sceneRoutes: Routes = [
  {
    path: 'scene/:id',
    component: SceneComponent,
    resolve: { sc: SceneResolveService }
  }
];

export const sceneRouting = RouterModule.forChild(sceneRoutes);
