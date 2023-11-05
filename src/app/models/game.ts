import { Board } from './board';
import { Color } from './color';
import { Coordinate } from './coordinate';

export class Game {

  private board: Board;

  constructor() {
    this.board = new Board();
  }

  put(coordinate: Coordinate): void {
    this.board.put(coordinate);
  }

  change(): void {
    this.board.change();
  }

  isComplete(): boolean {
    return this.board.isComplete();
  }

  full(coordinate: Coordinate): boolean {
    return this.board.full(coordinate);
  }

  isEmpty(coordinate: Coordinate): boolean {
    return this.board.isEmpty(coordinate);
  }

  existTicTacToe(): boolean {
    return this.board.existTicTacToe();
  }

  clear(): void {
    this.board.clear();
  }

  take(): Color {
    return this.board.take();
  }

  getColor(coordinate: Coordinate): Color {
    return this.board.getColor(coordinate);
  }

  remove(coordinate: Coordinate): void {
    this.board.remove(coordinate);
  }

  reset(): void {
    this.board.reset();
  }
}
