import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar implements AfterViewInit {
  indicatorLeft = 0;
  indicatorWidth = 0;

  // تابع فقط برای حرکت دادن نشانگر بنفش زیر دکمه‌هاست
  moveIndicator(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    this.indicatorLeft = element.offsetLeft;
    this.indicatorWidth = element.offsetWidth;
  }

  ngAfterViewInit() {
    this.syncIndicator();
  }

  // این تابع چک میکنه کدوم روت فعاله و نشانگر رو میبره اونجا
  private syncIndicator() {
    setTimeout(() => {
      const activeItem = document.querySelector('.active-item') as HTMLElement;
      if (activeItem) {
        this.indicatorLeft = activeItem.offsetLeft;
        this.indicatorWidth = activeItem.offsetWidth;
      }
    }, 300);
  }
}