import { TestBed } from '@angular/core/testing';

import { GameVersionService } from './game-version.service';

describe('GameVersionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameVersionService = TestBed.get(GameVersionService);
    expect(service).toBeTruthy();
  });
});
