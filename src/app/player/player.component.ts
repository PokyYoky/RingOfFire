import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  game?: Game;
  constructor() { }

  ngOnInit(): void {
    //todo: next step
    this.isCurrentPlayer = //Array.indexOf(this.game?.players) this.game?.currentPlayer;
  }

  @Input() name: string = '';
  @Input() isMale: boolean = false;
  @Input() isCurrentPlayer: boolean = false; 

}
