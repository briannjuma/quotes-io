import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/model/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'Do not worry much for not being cool, life is abouth warmth ',
      'Hasnai Nalle',
      'Brian Juma',
      0,
      0
    ),
    new Quote(
      2,
      'And if you think tough men are dangerous, wait until you see what weak men are capable of.',
      'Jordan Peterson',
      'Brian Juma',
      0,
      0
    ),
    new Quote(
      3,
      'If you were not such a moron you would realize this isnt our book. You should try the diet regardless, it might help with the obvious brain fog you are experiencing',
      'Mikhaila Peterson',
      'Brian Juma',
      0,
      0
    ),
    new Quote(
      4,
      'If you do not say what you think then you kill your unborn self.',
      'Jordan Peterson',
      'Brian Juma',
      0,
      0
    ),
    new Quote(
      5,
      'You can only find out what you actually believe (rather than what you think you believe) by watching how you act. You simply don’t know what you believe, before that. You are too complex to understand yourself.',
      'Jordan Peterson',
      'Brian Juma',
      0,
      0
    ),
  ];

  // votes
  upVote(isUpVote: any, index: any) {
    this.quotes[index].upVote++;
    //  this.loveQuote()
  }
  downVote(isDownVote: any, index: any) {
    this.quotes[index].downVote++;
  }

  constructor() {}

  ngOnInit(): void {}
}
