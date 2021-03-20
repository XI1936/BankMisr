import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  accTypeArr=[ "checking", "savings", "creditCard", "cash", "lineOfCredit", "otherAsset", "otherLiability" ];
  constructor() { }

  ngOnInit(): void {
  }

}
