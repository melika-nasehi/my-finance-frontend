import { Component } from '@angular/core';
import { TransactionSidebar } from "./transaction-sidebar/transaction-sidebar";

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [TransactionSidebar],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css',
})
export class Transactions {
  
}