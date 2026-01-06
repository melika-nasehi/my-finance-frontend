import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-new-transaction',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-new-transaction.html',
  styleUrls: ['./add-new-transaction.css']
})
export class AddNewTransaction implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  // لیست‌هایی که از بک‌هند می‌آیند
  categories: any[] = [];
  accounts: any[] = [];

  newData = {
    date: new Date().toISOString().split('T')[0],
    amount: null,
    desc: '',
    kind: 'expense',
    account: null,  // آیدی حساب انتخابی
    category: null  // آیدی دسته انتخابی
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadDropdownData();
    console.log(this.newData);
    //this.errorMessage = 'Manual Test Error';
  }

  loadDropdownData() {
    this.http.get<any[]>('http://127.0.0.1:8000/api/categories/').subscribe(data => this.categories = data);
    this.http.get<any>('http://127.0.0.1:8000/api/accounts/summary/').subscribe(data => {
      this.accounts = [...data.assets, ...data.liabilities];
    });
}

  errorMessage: string = '';

  save() {
    this.errorMessage = ''; 
    
    // یک آرایه برای ذخیره اسم فیلدهای خالی
    let emptyFields = [];

    if (!this.newData.amount) emptyFields.push('Amount');
    if (!this.newData.desc) emptyFields.push('Description');
    if (!this.newData.account) emptyFields.push('Account');
    if (!this.newData.category) emptyFields.push('Category');

    // اگر فیلد خالی وجود داشت
    if (emptyFields.length > 0) {
      // اسم فیلدها را با کاما به هم بچسبان
      this.errorMessage = 'Please fill: ' + emptyFields.join(', ');
      return;
    }

    // اگر همه پر بودند، ارسال به سرور
    const payload = {
      ...this.newData,
      amount: Number(this.newData.amount),
      account: Number(this.newData.account),
      category: Number(this.newData.category)
    };

    this.http.post('http://127.0.0.1:8000/api/transaction/main/', payload)
      .subscribe({
        next: (res) => {
          this.saved.emit();
          this.close.emit();
        },
        error: (err) => {
          this.errorMessage = 'Server error. Please try again.';
        }
      });
  }
}