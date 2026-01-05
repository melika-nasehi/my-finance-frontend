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
    kind: 'outcome',
    account: null,  // آیدی حساب انتخابی
    category: null  // آیدی دسته انتخابی
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadDropdownData();
  }

  loadDropdownData() {
    this.http.get<any[]>('http://127.0.0.1:8000/api/categories/').subscribe(data => this.categories = data);
    this.http.get<any[]>('http://127.0.0.1:8000/api/accounts/').subscribe(data => this.accounts = data);
  }

  save() {
    this.http.post('http://127.0.0.1:8000/api/transactions/', this.newData)
      .subscribe({
        next: () => {
          this.saved.emit();
          this.close.emit();
        },
        error: (err) => alert('خطا در ذخیره! فیلدها را چک کنید.')
      });
  }
}