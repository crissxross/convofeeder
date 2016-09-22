import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ScenedataService } from './scenedata.service';
import '../rxjs-operators';

@Injectable()
export class SceneResolveService implements Resolve<any> {

  constructor(
    private scdataService: ScenedataService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    let id = +route.params['id'];

    return this.scdataService.getSceneData(id)
      .map(data => data.scenedata)
      .do(data => console.log('RESOLVED sc data:', data));
      // .share();
  }

}
