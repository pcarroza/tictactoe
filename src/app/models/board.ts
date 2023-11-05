import { colors, Color } from './color';
import { Coordinate } from './coordinate';
import { Turn } from './turn';
import { Direction } from './direction';

export class Board {
  private flat: Map<Color, Set<Coordinate>>;

  private turn: Turn;

  constructor() {
    this.flat = new Map();
    colors.forEach((color) => this.flat.set(color, new Set<Coordinate>()));
    this.turn = new Turn(colors.length);
  }

  put(coordinate: Coordinate): void {
    this.flat.get(this.turn.take())?.add(coordinate);
  }

  isComplete(): boolean {
    let numberOfTokens: number = colors.reduce((acc, color) => {
      return acc + (this.flat.get(color)?.size || 0);
    }, 0);
    return numberOfTokens === Coordinate.DIMENSION * colors.length;
  }

  existTicTacToe(): boolean {
    let flat: Set<Coordinate> | undefined = this.flat.get(this.turn.take());
    if (flat?.size != Coordinate.DIMENSION) {
      return false;
    }
    let coordinates: Coordinate[] = [...flat];
    let direction: Direction = coordinates[0].inDirection(coordinates[1]);
    if (direction === Direction.NON_EXISTENT) {
      return false;
    }
    for (let i: number = 1; i < Coordinate.DIMENSION - 1; i++) {
      if (coordinates[i].inDirection(coordinates[i + 1]) != direction) {
        return false;
      }
    }
    return true;
  }

  isEmpty(target: Coordinate): boolean {
    return !this.isFull(target, Color.OS) && !this.isFull(target, Color.XS);
  }

  full(target: Coordinate): boolean {
    return this.isFull(target, this.turn.take());
  }

  getColor(coordinate: Coordinate): Color {
    return colors.find((color) => this.isFull(coordinate, color)) || Color.NONE;
  }

  private isFull(target: Coordinate, color: Color): boolean {
    let ok: boolean = false;
    this.flat.get(color)?.forEach((coordinate) => {
      if (coordinate.isEquals(target)) {
        ok = true;
      }
    });
    return ok;
  }

  remove(target: Coordinate): void {
    this.flat.get(this.turn.take())?.delete(target);
  }

  reset(): void {
    this.turn.reset();
  }

  take(): Color {
    return this.turn.take();
  }

  change(): void {
    this.turn.change();
  }

  clear(): void {
    colors.forEach((color) => this.flat.get(color)?.clear());
    this.turn.reset();
  }
}
