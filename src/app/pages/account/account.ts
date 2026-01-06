import { Component, OnInit } from '@angular/core';
import { AccountSummary } from './account-summary/account-summary';
import { AccountList } from './account-list/account-list';
import { AccountChart } from './account-chart/account-chart';
import { AccountService } from '../../services/account.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [AccountSummary, AccountList, AccountChart, CommonModule],
  providers: [AccountService],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account implements OnInit {
  assets: any[] = [];
  liabilities: any[] = [];
  netWorth: number = 0;
  totalAssets: number = 0;
  totalLiabilities: number = 0;
  chartData: any = { series: [], dates: [], colors: [] };

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.loadAccountData();
  }

  loadAccountData() {
    this.accountService.getAccountSummary().subscribe({
      next: (data) => {
        this.assets = data.assets;
        this.liabilities = data.liabilities;
        this.netWorth = data.net_worth;
        this.totalAssets = data.total_assets;
        this.totalLiabilities = data.total_liabilities;
        this.chartData = data.chart_data; 
      },
      error: (err) => console.error('Error fetching accounts:', err)
    });
  }
}