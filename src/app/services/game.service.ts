import { Game } from './../models/game';
import { Injectable } from '@angular/core';
import { Color } from '../models/color';
import { Coordinate } from '../models/coordinate';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  private game: Game

  constructor() {
    this.game = new Game;
  }

  put(coordinate: Coordinate): void {
    this.game.put(coordinate);
  }

  change(): void {
    this.game.change();
  }

  isComplete(): boolean {
    return this.game.isComplete();
  }

  full(coordinate: Coordinate): boolean {
    return this.game.full(coordinate);
  }

  isEmpty(coordinate: Coordinate): boolean {
    return this.game.isEmpty(coordinate);
  }

  existTicTacToe(): boolean {
    return this.game.existTicTacToe();
  }

  clear(): void {
    this.game.clear();
  }

  take(): Color {
    return this.game.take();
  }

  getColor(coordinate: Coordinate): Color {
    return this.game.getColor(coordinate);
  }

  remove(coordinate: Coordinate): void {
    this.game.remove(coordinate);
  }

  changeToTurnInitial(): void {
    this.game.changeToTurnInitial();
  }
}
