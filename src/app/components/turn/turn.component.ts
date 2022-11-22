import { GameService } from 'src/app/services/game.service';
import { Component, ViewChild } from '@angular/core';
import { TokenComponent } from '../token/token.component';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.css'],
})
export class TurnComponent {
  @ViewChild(TokenComponent) tokenComponent!: TokenComponent;

  constructor(private gameService: GameService) {}

  take(): void {
    this.tokenComponent.setColor(this.gameService.take());
  }
  
  reset(): void {
    this.gameService.changeToTurnInitial();
    this.tokenComponent.setColor(this.gameService.take());
  }
}


