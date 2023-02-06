import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  heart = '../../assets/icons/heart.svg';
  clubs = '../../assets/icons/clubs.svg';
  spade = '../../assets/icons/spade.svg';
  diamond = '../../assets/icons/diamond.svg';

  constructor() { }
  @Input() data?:Card;
  fakeArray?:number[];
  ngOnInit(): void {
    this.fakeArray = new Array(Number(this.data?.value))
  }

}
