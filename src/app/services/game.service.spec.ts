import { TestBed } from '@angular/core/testing';
import { Coordinate } from '../models/coordinate';

import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('verificar si existe tictactoe', () => {
    service.put(new Coordinate(1,1));
    service.put(new Coordinate(1,2));
    service.put(new Coordinate(1,3));
    expect(service.existTicTacToe()).toBe(true)
  })
});


