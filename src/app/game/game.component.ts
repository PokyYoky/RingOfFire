import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game: Game | undefined;
  animationOnTakeCard: boolean = false;
  cardImage: string = '../../assets/img/cards/card_cover.png';
  currentCard: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {

    if (!this.animationOnTakeCard) {
      this.currentCard = this.game?.stack.pop();
      this.animationOnTakeCard = true;
      this.cardImage = '../../assets/img/cards/' + this.currentCard + '.png'; //'../../assets/img/cards/ace_1.png';
      this.game?.playedCards.push(this.currentCard + '');
      // console.log(this.game?.stack);
      // console.log(this.game?.playedCards);
    
      setTimeout(()=> {
        this.animationOnTakeCard = false;
      }, 1500);
      
    }
    
  }
}
