import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-list.html',
  styleUrl: './account-list.css'
})
export class AccountList {
  @Input() assets: any[] = [];
  @Input() liabilities: any[] = [];
}