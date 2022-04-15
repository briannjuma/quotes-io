import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/model/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Grit, determination, the right amount of crazy, self belief - everything it takes to be a champion. I have that.', 'Dustin Poirier', 'Linet', new Date(2019,9,14),0 , 0,false),
    new Quote(2,'Find something you are passionate about and keep tremendously interested in it.','Julia Child','Jesse',new Date(2019,6,9),0 , 0,false),
    new Quote(3,'You must be the change you wish to see in the world.','Mahatma Gandhi','Anyango',new Date(2019,1,12),0 , 0,false),
    new Quote(4,'It is very easy to forgive others their mistakes; it takes more grit and gumption to forgive them for having witnessed your own.','Jessamyn West','Samwel',new Date(2019,11,18),0 , 0,false),
    new Quote(5,'Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.','Bruce Lee','Stacy', new Date(2019,2,14),0 , 0,false),
  ];

  constructor() {
  }

  ngOnInit(): void {}
}
