import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewTransaction } from '../add-new-transaction/add-new-transaction';

@Component({
  selector: 'app-transaction-table',
  standalone: true,
  imports: [CommonModule, AddNewTransaction],
  templateUrl: './transaction-table.html',
  styleUrls: ['./transaction-table.css']
})
export class TransactionTable {
  @Input() groups: any[] = [];
  @Input() grandTotalExpense: number = 0;
  @Input() grandTotalDeposit: number = 0;
  showAddModal = false;

  expandedRows: Set<string> = new Set();

  toggleRow(catName: string) {
  if (this.expandedRows.has(catName)) {
    this.expandedRows.delete(catName);
  } else {
    this.expandedRows.add(catName);
  }
  // ایجاد رفرنس جدید برای شناسایی تغییر در آنگولار
  this.expandedRows = new Set(this.expandedRows);
}
}