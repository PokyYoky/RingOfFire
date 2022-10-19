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
  }

  @Input() name: string = '';
  @Input() isMale: boolean = false;
}
