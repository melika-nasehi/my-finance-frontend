import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  username: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.username = this.authService.getUsername();
  }
}