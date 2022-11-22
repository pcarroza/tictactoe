import { GameService } from 'src/app/services/game.service';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Color } from 'src/app/models/color';
import { TokenComponent } from '../token/token.component';
import { Coordinate } from '../../models/coordinate';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxComponent {
  
  @ViewChild(TokenComponent) tokenComponent!: TokenComponent;

  @Output() eventPutColor = new EventEmitter<Coordinate>();

  @Input() coordinate!: Coordinate;

  private isFull: boolean = false;

  constructor(private gameService: GameService) {}

  put(): void {
    if (!this.isFull) {
      this.isFull = true;
      this.setColor(this.gameService.take());
      this.eventPutColor.emit(this.coordinate);
    }
  }

  clear(): void {
    this.tokenComponent.clear();
    this.isFull = false;
  }

  setColor(color: Color): void {
    this.tokenComponent.setColor(color);
  }
}
