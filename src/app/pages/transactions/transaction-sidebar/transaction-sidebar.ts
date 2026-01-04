// فایل: transaction-sidebar.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-sidebar.html',
  styleUrl: './transaction-sidebar.css'
})
export class TransactionSidebar {
  menus: any = {
    month: true,
    day: false,
    year: false,
    misc: false,
    budget: false
  };

  categories = [
    'Credit Card Payments', 'Entertainment', 'Gas', 
    'Groceries', 'Housing', 'Income'
  ];
  months = ['January', 'February', 'March', 'April', 'May', 'June'];
  years = ['2023', '2024', '2025', '2026'];

  toggleMenu(menuName: string) {
    this.menus[menuName] = !this.menus[menuName];
  }
}