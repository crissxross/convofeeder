/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SceneResolveService } from './scene-resolve.service';

describe('Service: SceneResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SceneResolveService]
    });
  });

  it('should ...', inject([SceneResolveService], (service: SceneResolveService) => {
    expect(service).toBeTruthy();
  }));
});
