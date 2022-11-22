import { Direction } from './direction';

export class Coordinate {
  
  private row: number;

  private column: number;

  public static DIMENSION: number = 3;

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
  }

  get ROW(): number {
    return this.row;
  }

  get COLUMN(): number {
    return this.column;
  }
  
  inDirection(coordinate: Coordinate): Direction {
    let direction: Direction | undefined;
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
    return this.COLUMN === coordinate.COLUMN;
  }

  inRow(coordinate: Coordinate): boolean {
    return this.ROW === coordinate.ROW;
  }

  inDiagonal(): boolean {
    return this.ROW - this.COLUMN === 0;
  }

  inInverse(): boolean {
    return this.ROW + this.COLUMN === Coordinate.DIMENSION + 1;
  }

  isEquals(coordinate: Coordinate): boolean {
    return this.ROW === coordinate.ROW && this.COLUMN === coordinate.COLUMN;
  }

}
