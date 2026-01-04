import { Component } from '@angular/core';
import { TransactionSidebar } from "./transaction-sidebar/transaction-sidebar";
import { DonutChart } from './charts/donut-chart/donut-chart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [TransactionSidebar,DonutChart, CommonModule],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css',
})
export class Transactions {
  
}