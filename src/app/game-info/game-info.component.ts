import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { GameRules } from 'src/models/gamerules';
import { GameRule } from 'src/models/IGameRule';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {

  rules: GameRules = new GameRules();
  title: string = '';
  description: string = '';

  @Input() card: string | undefined = '';
  
  constructor() { }

  ngOnInit(): void {
    
    //console.log(this.rules.data);
  }

  ngOnChanges(): void {
    if (this.card) {
    let cardNumber: number = Number(this.card?.split('_')[1]);
    let rule: GameRule = this.rules.data[cardNumber - 1];
    this.title = rule.title;
    this.description = rule.description;
    }
  }

}
