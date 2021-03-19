import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
 
  constructor(private http: HttpClient) { }
  baseURL="https://api.youneedabudget.com/v1/";

  getUserDetail() : Observable<any> {
    const url=this.baseURL+'user';
    return this.http.get(url);
    //return this.http.get(`${environment.baseUrl}/budgets`);
  }

  getAllbudgets(){
    const url=this.baseURL+'budgets?include_accounts=true';
    return this.http.get(url);
  }

  getBudgetAccounts(budgetId){
    const url=this.baseURL+'budgets/' +budgetId+ '/accounts';
    return this.http.get(url);
  }

  getListofPayees(budgetId){
    const url=this.baseURL+'budgets/' +budgetId+ '/payees';
    return this.http.get(url);
  }

  createAccount(userData,budgetId){
  // {
  // "account": {
  //   "name": "saif",
  //   "type": "checking",
  //   "balance": 0
  //      } 
  // }
  const url=this.baseURL+'budgets/' +budgetId+ '/accounts';
  return this.http.post(url,userData,{ responseType: 'blob' as 'json', observe: 'response' });

  }
}
