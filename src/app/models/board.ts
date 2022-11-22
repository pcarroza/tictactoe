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
    let numberOfTokens: number = 0;
    for (let color of colors) {
      this.flat.get(color)?.forEach(() => (numberOfTokens += 1));
    }
    return numberOfTokens === Coordinate.DIMENSION * colors.length;
  }

  existTicTacToe(): boolean {
    let coordinates: Set<Coordinate> | undefined = this.flat.get(
      this.turn.take()
    );
    if (coordinates?.size != Coordinate.DIMENSION) {
      return false;
    }
    let coordinatesArray: Coordinate[] = [...coordinates];
    let direction: Direction = coordinatesArray[0].inDirection(
      coordinatesArray[1]
    );
    if (direction === Direction.NON_EXISTENT) {
      return false;
    }
    for (let i: number = 1; i < Coordinate.DIMENSION - 1; i++) {
      if (
        coordinatesArray[i].inDirection(coordinatesArray[i + 1]) != direction
      ) {
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
    let color_: Color = Color.NONE;
    colors.forEach((color) => {
      if (this.isFull(coordinate, color)) {
        color_ = color;
      }
    });
    return color_;
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
    let coordinates: any = this.flat.get(this.turn.take());
    let coordinateArrays: Coordinate[] = [...coordinates];
    coordinateArrays.filter((coordinate) => !coordinate.isEquals(target));
    this.flat.get(this.turn.take())?.clear();
    coordinateArrays.forEach((coordinate) => {
      this.flat.get(this.turn.take())?.add(coordinate);
    });
  }

  changeToTurnInitial(): void {
    this.turn.reset();
  }

  take(): Color {
    return this.turn.take();
  }

  change(): void {
    this.turn.changeTurn();
  }

  clear(): void {
    colors.forEach((color) => this.flat.get(color)?.clear());
    this.turn.reset();
  }
}
