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
 

 constructor() { }

  ngOnInit(): void {
    this.shuffleDeck();
    console.log(this.deck);
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

}
