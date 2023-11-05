import { BoardComponent } from './../board/board.component';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { TurnComponent } from '../turn/turn.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent implements OnInit, AfterViewInit {
  
  @ViewChild(BoardComponent) boardComponent!: BoardComponent;

  @ViewChild(TurnComponent) turnComponent!: TurnComponent;

  constructor(private gameService: GameService) {}

  reset() {
    this.gameService.clear();
    this.turnComponent.reset();
    this.boardComponent.clear();
  }

  ngAfterViewInit(): void {
    this.turnComponent.take();
  }

  ngOnInit(): void {
  }
}
