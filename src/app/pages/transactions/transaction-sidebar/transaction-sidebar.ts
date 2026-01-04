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
    month: true, // طبق عکس پیش‌فرض باز است
    day: false,
    year: false,
    misc: false,
    budget: false
  };

  toggleMenu(menuName: string) {
    this.menus[menuName] = !this.menus[menuName];
  }
}