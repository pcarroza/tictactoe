import { Direction } from './direction';

export class Coordinate {
  
  private row_: number;

  private column_: number;

  public static DIMENSION: number = 3;

  constructor(row: number, column: number) {
    this.row_ = row;
    this.column_ = column;
  }

  get row(): number {
    return this.row_;
  }

  get column(): number {
    return this.column_;
  }
  
  inDirection(coordinate: Coordinate): Direction {
    let direction: Direction;
    if (this.inRow(coordinate)) {
      direction = Direction.HORIZONTAL;
    } else if (this.inColumn(coordinate)) {
      direction = Direction.VERTICAL;
    } else if (this.inDiagonal() && coordinate.inDiagonal()) {
      direction = Direction.DIAGONAL;
    } else if (this.inInverse() && coordinate.inInverse()) {
      direction = Direction.INVERSE;
    } else {
      direction = Direction.NON_EXISTENT;
    }
    return direction;
  }

  inColumn(coordinate: Coordinate) {
    return this.column === coordinate.column;
  }

  inRow(coordinate: Coordinate): boolean {
    return this.row === coordinate.row;
  }

  inDiagonal(): boolean {
    return this.row - this.column === 0;
  }

  inInverse(): boolean {
    return this.row + this.column === Coordinate.DIMENSION + 1;
  }

  isEquals(coordinate: Coordinate): boolean {
    return this.row === coordinate.row && this.column === coordinate.column;
  }
}
