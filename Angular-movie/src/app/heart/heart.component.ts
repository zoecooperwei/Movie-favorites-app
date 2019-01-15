import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent implements OnInit, OnChanges {

  @Input ()
  rating:number = 0;

  @Output () 
  ratingupdate = new EventEmitter<number>();

  @Input ()
  readonly: boolean = true;

  hearts: boolean[];

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(): void {
    // generate heart array
    this.hearts = [];
    for(let i = 1; i<=5; i++){
      this.hearts.push(i*2 > this.rating);
    }
  }

  // click allowed when not in readonly pattern 
  clickheart(newrating:number) {
    if(!this.readonly) {
      this.rating = newrating + 2;
      this.ratingupdate.emit(this.rating);
    }
  }
}
