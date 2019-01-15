import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

// Images path
  private imgpath1 = "../../assets/img/schindler.jpeg";
  private imgpath2 = "../../assets/img/leon.jpeg";
  private imgpath3 = "../../assets/img/inception.jpeg";

  constructor() { }

  ngOnInit() {
  }
}
