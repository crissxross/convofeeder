/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScenedataService } from './scenedata.service';

describe('Service: Scenedata', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScenedataService]
    });
  });

  it('should ...', inject([ScenedataService], (service: ScenedataService) => {
    expect(service).toBeTruthy();
  }));
});
