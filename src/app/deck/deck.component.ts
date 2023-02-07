import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  suits:string[] = ["HEART","DIAMOND","SPADE","CLUBS"];
  colors:any = {
    HEART: "red",
    DIAMOND: "red",
    SPADE: "black",
    CLUBS: "black"
  };
  values:string[] = ["1","2","3","4","5","6","7","8","9","10","11","12","13"];
  deck:Card[] = [];
  totalCard:number = 5;
  playerCard:Card[] = [];

 constructor() { }

  ngOnInit(): void {
    this.shuffleDeck();
    this.distributePlayerCards();
    console.log(this.playerCard);
  }

  setDeck():Card[]{
    let unshuffled = [];
    for(let suit in this.suits){
      for(let value in this.values){
        unshuffled.push({
          suit: this.suits[suit],
          color: this.colors[this.suits[suit]],
          value: this.values[value],
        })
      }
    }
    return unshuffled;
  }

  shuffleDeck():void{
    this.deck = this.setDeck();
    for(let i=this.deck.length - 1; i>0; i--){
      const j = Math.floor(Math.random()*(i+1));
      let temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
  }

  distributePlayerCards():void{
    let copyDeck = this.deck.slice();
    for(let i=0; i<this.totalCard; i++){
      let randomIndex = Math.floor(Math.random() * copyDeck.length);
      let randomElement = copyDeck[randomIndex];
      this.playerCard.push(randomElement);
      copyDeck.splice(randomIndex,1);
    }
  }

}
