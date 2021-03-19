import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAllBuget:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeSideNav(){
    this.isAllBuget=!this.isAllBuget;
  }

}
