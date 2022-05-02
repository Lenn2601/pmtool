import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

level = 0;

name="Dieter"
function() {
this.level = this.level +1;
console.log(this.level); //das hier zum Debuggen
}

function2() {
  this.level = this.level -1;
  console.log(this.level);
  }
}
