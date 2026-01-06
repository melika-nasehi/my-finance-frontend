import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(
    private accountService: AccountService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadAccountData();
  }

  loadAccountData() {
  this.accountService.getAccountSummary().subscribe({
    next: (data) => {
      if (!data) return;

      const mapAccount = (acc: any) => ({
        id: acc.id,
        name: acc.name,
        balance: acc.balance,
        type: acc.type ? acc.type : 'account', 
        is_debt: acc.is_debt,
        color: acc.color
      });

      this.assets = (data.assets || []).map(mapAccount);
      this.liabilities = (data.liabilities || []).map(mapAccount);
      
      this.netWorth = data.net_worth || 0;
      this.totalAssets = data.total_assets || 0;
      this.totalLiabilities = data.total_liabilities || 0;
      this.chartData = data.chart_data || { series: [], dates: [], colors: [] };

      this.cdr.detectChanges();
      console.log(data)
    },
    error: (err) => console.error('Error:', err)
  });
}
}