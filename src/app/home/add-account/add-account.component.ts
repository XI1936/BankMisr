import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  accTypeArr=[ "checking", "savings", "creditCard", "cash", "lineOfCredit", "otherAsset", "otherLiability" ];
  budgetNameArr:any=[];
  isLoaded:boolean=false;
  isSaved:boolean=false;
  constructor(private appSevice:AppService) { }
   
  ngOnInit(): void {
    this.appSevice.getAllbudgets().subscribe((data=>{
      let budget=data['data'].budgets;
      budget.forEach(element => {
        this.budgetNameArr.push({key:element.id,value:element.name})
      });
    }));
  }

  onSubmit(data){
    this.isLoaded=true
    let budgetId=data.budgetId;
    let newAccData={
      "account":{
        "name": data.accName,
      "type": data.accType,
      "balance": data.accBalance
      }
    }
    this.appSevice.createAccount(newAccData,budgetId).subscribe((resp=>{
      this.isSaved=true;
      this.isLoaded=false;
    })); 
  }

  closePop(){
    this.isSaved=false;
  }
}
