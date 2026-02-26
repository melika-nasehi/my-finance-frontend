import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assets',
  imports: [CommonModule],
  templateUrl: './assets.html',
  styleUrl: './assets.css',
})
export class Assets {
  assets = [
    { name: 'Checking Account', type: 'Liquid', amount: 8500 },
    { name: 'Savings Account', type: 'Liquid', amount: 15000, growth: '2.0%' },
    { name: 'Investment Portfolio', type: 'Illiquid', amount: 32000, growth: '7.0%' }
  ];

  constructor() {}

  ngOnInit(): void {}

}
