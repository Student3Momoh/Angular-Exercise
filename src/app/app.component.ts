import { Component } from '@angular/core';

export class Clubs {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  name: string;
  FootballCulbs: Clubs [] = [
    new Clubs('Real Madrid'),
    new Clubs('Barcelona'),
    new Clubs('PSG'),
    new Clubs('Manchester United'),
    new Clubs('Chelsea')
  ]

  Team = ["Real Madrid", "Barcelona", "PSG", "Manchester United", "Chelsea"];


  public num1: number;
  public num2: number;
  sum: number;
  sub: number;
  multi: number;
  div: number;
  result: number;

  addSum(){
    this.sum = this.num1 + this.num2;
    this.result = this.num1 + this.num2;
  }

  minSub(){
    this.sub = this.num1 - this.num2;
    this.result = this.num1 - this.num2;
  }

  addMulti(){
    this.multi = this.num1 * this.num2;
    this.result = this.num1 * this.num2;
  }

  addDiv(){
    this.div = this.num1 / this.num2;
    this.result = this.num1 / this.num2;
  }

  showButtonEnable= true;
  toggleButtons() {
    this.showButtonEnable = !this.showButtonEnable;
  }
}
