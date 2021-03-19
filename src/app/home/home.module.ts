import { AllbudgetsComponent } from './allbudgets/allbudgets.component';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AllbudgetsComponent],
  imports: [HomeRoutingModule,  CommonModule, FormsModule, ReactiveFormsModule],
  providers: []
})
export class HomeModule { 
}
