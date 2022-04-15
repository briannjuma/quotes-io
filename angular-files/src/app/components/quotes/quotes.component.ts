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
      0,
      false
    ),
    new Quote(
      4,
      'If you do not say what you think then you kill your unborn self.',
      'Jordan Peterson',
      'Brian Juma',
      0,
      0,
      false
    ),
    new Quote(
      2,
      'And if you think tough men are dangerous, wait until you see what weak men are capable of.',
      'Jordan Peterson',
      'Brian Juma',
      0,
      0,
      false
    ),
    new Quote(
      5,
      'You can only find out what you actually believe (rather than what you think you believe) by watching how you act. You simply do not know what you believe, before that. You are too complex to understand yourself.',
      'Jordan Peterson',
      'Brian Juma',
      0,
      0,
      false
    ),
  ];

  // votes
  upVote(isUpVote: any, index: any) {
    this.quotes[index].upVote++;
    this.isMostLiked();
  }
  downVote(isDownVote: any, index: any) {
    this.quotes[index].downVote++;
  }

  //most liked quote
  isMostLiked() {
    let maxValue: number = Math.max.apply(
      Math,
      this.quotes.map(function (quote) {
        return quote.upVote;
      })
    );
    let quoteIndex: number = this.quotes.findIndex(
      (quote) => quote.upVote === maxValue
    );
    this.quotes.forEach((quote) => {
      quote.isMostLiked = false;
    });
    this.quotes[quoteIndex].isMostLiked = true;
  }

  // delete logic
  deleteQuote(isComplete: boolean, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index]}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
