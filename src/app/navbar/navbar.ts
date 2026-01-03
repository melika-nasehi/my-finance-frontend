import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  indicatorLeft = 0;
  indicatorWidth = 0;

  moveIndicator(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    this.indicatorLeft = element.offsetLeft;
    this.indicatorWidth = element.offsetWidth;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const firstItem = document.querySelector('.segment-item') as HTMLElement;
      if (firstItem) {
        this.indicatorLeft = firstItem.offsetLeft;
        this.indicatorWidth = firstItem.offsetWidth;
      }
    }, 100);
  }
}
