import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { Player } from 'src/models/IPlayer';

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

  constructor(public dialog: MatDialog) { }

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
      this.cardImage = 'assets/img/cards/' + this.currentCard + '.png'; //'../../assets/img/cards/ace_1.png';
      this.game?.playedCards.push(this.currentCard + '');
    
      setTimeout(()=> {
        this.animationOnTakeCard = false;
      }, 1500);

      if (this.game) {
        //todo: alle console.log entfernen
        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
     } 
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(result => {
      let player: Player = {name: result[0] + '', male: (result[1] == 1)};
      this.game?.players.push(player);
      console.log(this.game?.players);
    });
  }
}