import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private appSevice:AppService) { }
  budgetNameArr:any=[];
  accountArr:any=[];
  isLoaded:boolean = false;
  ngOnInit(): void {
    this.appSevice.getAllbudgets().subscribe((data=>{
      let budget=data['data'].budgets;
      budget.forEach(element => {
        this.budgetNameArr.push({key:element.id,value:element.name})
      });
    }));
  }

  selectedBudget(value){
    this.isLoaded=true;
    this.appSevice.getBudgetAccounts(value).subscribe((data)=>{
      this.accountArr=data['data'].accounts;
      this.accountArr.sort((a,b)=>{
        return b.balance - a.balance ;
      })
      this.isLoaded=false;
    })
    
  }

}
