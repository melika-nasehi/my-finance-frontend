import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://127.0.0.1:8000/api/transaction/category-expenses/'; 

  constructor(private http: HttpClient) { }

  getCategoryExpenses(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getDailyExpenses(): Observable<any> {
  return this.http.get<any>('http://127.0.0.1:8000/api/transaction/daily-expenses/');
}

  getGroupedTransactions(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/transaction/grouped/');
  }
}