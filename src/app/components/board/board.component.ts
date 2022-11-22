import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Coordinate } from 'src/app/models/coordinate';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent implements OnInit {

  @ViewChildren(BoxComponent) boxes!: QueryList<BoxComponent>;

  @Output() eventPutToken = new EventEmitter<Coordinate>();

  coordinates: Coordinate[] = [];

  constructor() {}

  put(coordinate: Coordinate): void {
    this.eventPutToken.emit(coordinate);
  }

  clear(): void {
    this.boxes.forEach((box) => box.clear());
  }
  
  private generateBoxes(): void {
    for (let i: number = 1; i <= Coordinate.DIMENSION; i++) {
      for (let j: number = 1; j <= Coordinate.DIMENSION; j++) {
        this.coordinates.push(new Coordinate(i, j));
      }
    }
  }

  ngOnInit(): void {
    this.generateBoxes();
  }
}
