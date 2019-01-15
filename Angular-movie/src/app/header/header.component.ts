import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public navlist:Array<List>;

  constructor(private router:Router) { }

  ngOnInit() {
    // navbar link list
    this.navlist = [
     new List(1, 'Home', 'home'),
     new List(2, 'Movie', 'movie')
    ]
  }

// navigate to link
  nav(li:List){
    this.router.navigateByUrl(li.link);
  }
}

// navbar link class
export class List {
  constructor(
    public id:number,
    public name:string,
    public link:string
  ) {}
}