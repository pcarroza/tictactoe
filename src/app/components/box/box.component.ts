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
  template: `<div (click)="put()" class="box">
              <app-token></app-token>
            </div>`,
  styleUrls: ['./box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxComponent {

  @ViewChild(TokenComponent) tokenComponent!: TokenComponent;

  @Input() coordinate!: Coordinate;

  private isFull: boolean = false;

  constructor(private gameService: GameService) {}

  put(): void {
    if (!this.isFull) {
      this.isFull = true;
      this.color = this.gameService.take();
      this.gameService.put(this.coordinate);
      this.gameService.change();
      this.gameService.take();
    }
  }

  clear(): void {
    this.tokenComponent.clear();
    this.isFull = false;
  }

  set color(color: Color) {
    this.tokenComponent.setColor(color);
  }
}
