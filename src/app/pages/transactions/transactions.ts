import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TransactionSidebar } from "./transaction-sidebar/transaction-sidebar";
import { DonutChart } from './charts/donut-chart/donut-chart';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../services/transaction.service';
import { BarChart } from './charts/bar-chart/bar-chart';
import { TransactionTable } from './transaction-table/transaction-table'; // ۱. اضافه شدن کامپوننت جدول

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [TransactionSidebar, DonutChart, CommonModule, BarChart, TransactionTable], // ۲. اضافه شدن به ایمپورت‌ها
  providers: [TransactionService],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css',
})
export class Transactions implements OnInit, AfterViewInit {
  // دیتای چارت‌ها
  chartData: number[] = [];
  chartLabels: string[] = [];
  chartColors: string[] = [];
  barData: number[] = [];
  barLabels: string[] = [];

  // ۳. متغیرهای جدید برای جدول (مطابق اسکرین‌شات)
  groupedTransactions: any[] = [];
  totalExpense: number = 0;
  totalDeposit: number = 0;

  constructor(
    private transactionService: TransactionService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.loadData();
      this.loadTableData(); // ۴. فراخوانی دیتای جدول
    }, 50);
  }

  loadData() {
    // دیتای دونات چارت
    this.transactionService.getCategoryExpenses().subscribe({
      next: (data) => {
        if (data) {
          this.chartData = [...data.series];
          this.chartLabels = [...data.labels];
          this.chartColors = [...data.colors];
          this.cdr.detectChanges(); 
        }
      },
      error: (err) => console.error('Error:', err)
    });

    // دیتای بار چارت
    this.transactionService.getDailyExpenses().subscribe({
      next: (data) => {
        if (data) {
          this.barData = [...data.data];
          this.barLabels = [...data.categories];
          this.cdr.detectChanges();
        }
      }
    });
  }

  // ۵. متد جدید برای دریافت دیتای جدول از بک‌اندمان
  loadTableData() {
    this.transactionService.getGroupedTransactions().subscribe({
      next: (res) => {
        if (res) {
          this.groupedTransactions = res.groups;
          this.totalExpense = res.grand_total_expense;
          this.totalDeposit = res.grand_total_deposit;
          this.cdr.detectChanges();
        }
      },
      error: (err) => console.error('Table Data Error:', err)
    });
  }
}