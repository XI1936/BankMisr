import { AppService } from 'src/app/services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  budgetNameArr:any = [];
  allBudgetData:any;
  accNames:any=[];
  isLoaded:boolean = false;
  currentBudgetId:any;
  transactionArr:any=[];
  constructor(private appSevice:AppService) { }

  ngOnInit(): void {
    this.appSevice.getAllbudgets().subscribe((data=>{
      let budget=data['data'].budgets;
      this.allBudgetData=data['data'].budgets;
      budget.forEach(element => {
        this.budgetNameArr.push({key:element.id,value:element.name})
      });
    }));
  }

  selectedBudget(selectedBudgetId){
    this.accNames=[];
    this.currentBudgetId=selectedBudgetId;
    let budget=this.allBudgetData.filter((elm=>{
      return elm.id==selectedBudgetId;
    }));
     let currentBudgetAcc=budget[0].accounts;
     currentBudgetAcc.forEach(element => {
      this.accNames.push({key:element.id,value:element.name});
    });
  }

  selectedAccount(accId){
    this.isLoaded=true;
    this.transactionArr=[];
    this.appSevice.getPayeeTranx(this.currentBudgetId,accId).subscribe((data=>{
      this.transactionArr=data['data'].transactions;
      this.isLoaded=false;
    }));
  }
  

}
