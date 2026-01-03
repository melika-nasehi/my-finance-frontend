import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-sidebar',
  imports: [CommonModule],
  templateUrl: './transaction-sidebar.html',
  styleUrl: './transaction-sidebar.css',
})
export class TransactionSidebar {
  categories = [
    'Credit Card Payments', 'Entertainment', 'Gas', 
    'Groceries', 'Housing', 'Income', 'Travel'
  ];
}
