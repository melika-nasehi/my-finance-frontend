import { Component, OnInit } from '@angular/core';
import { Assets } from './assets/assets';

@Component({
  selector: 'app-plans',
  imports: [Assets],
  templateUrl: './plans.html',
  styleUrl: './plans.css',
})
export class Plans implements OnInit{
  username: string = '';
  
  ngOnInit() {
    const storedUser = localStorage.getItem('username'); 
    this.username = storedUser ? storedUser : 'Guest';
  }
}
