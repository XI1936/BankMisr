import { AllbudgetsComponent } from './allbudgets/allbudgets.component';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [AllbudgetsComponent, AccountsComponent, AddAccountComponent, TransactionsComponent],
  imports: [HomeRoutingModule,  CommonModule, FormsModule, ReactiveFormsModule],
  providers: []
})
export class HomeModule { 
}
