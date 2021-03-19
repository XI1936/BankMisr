import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAllBuget:boolean = false;
  constructor( private appService: AppService) { }

  ngOnInit(): void {
  }

  changeSideNav(){
    this.isAllBuget=!this.isAllBuget;
    this.appService.getBudgetAccounts('bf63e35c-e4ab-496a-878b-f7aa9553c625').subscribe((data)=>{
      console.log(data);
    });
    // let userData={
    //   "account": {
    //     "name": "saif",
    //     "type": "checking",
    //     "balance": 0
    //   }
    // };
    // this.appService.createAccount(userData,'bf63e35c-e4ab-496a-878b-f7aa9553c625').subscribe((data)=>{
    //   console.log(data);
    // });

    this.appService.getListofPayees('bf63e35c-e4ab-496a-878b-f7aa9553c625').subscribe((data)=>{
        console.log(data);
       
    });
    
  }

}
