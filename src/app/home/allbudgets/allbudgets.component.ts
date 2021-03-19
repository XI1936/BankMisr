import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-allbudgets',
  templateUrl: './allbudgets.component.html',
  styleUrls: ['./allbudgets.component.css']
})
export class AllbudgetsComponent implements OnInit {

  budgetsData: any;
  budgetArr;
  accArr=[];
  isLoaded:boolean = true;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getAllbudgets().subscribe((data)=>{
      this.budgetsData=data['data'];
      this.budgetArr=data['data'].budgets;
      this.budgetArr.forEach(element => {
        
        this.accArr.push(element['accounts'].length);
      });

      this.budgetArr.forEach(element => {
        element.visible=false;
      });  
      this.isLoaded=false;
    });
  }

  showDetail(index){
    console.log(index);
    this.budgetArr[index].visible=true;
  }

}
