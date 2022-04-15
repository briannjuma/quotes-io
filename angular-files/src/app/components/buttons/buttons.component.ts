import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/model/quote';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  @Input() 'quote': Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  @Output() isUpVote = new EventEmitter<boolean>();
  @Output() isDownVote = new EventEmitter<boolean>();

  upVote(like: boolean) {
    this.isUpVote.emit(like);
  }
  downVote(dislike: boolean) {
    this.isDownVote.emit(dislike);
  }
  constructor() {}

  ngOnInit(): void {}
}
