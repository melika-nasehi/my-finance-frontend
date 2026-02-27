import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansService } from '../../../services/plans.service';

@Component({
  selector: 'app-assets',
  imports: [CommonModule],
  templateUrl: './assets.html',
  styleUrl: './assets.css',
})
export class Assets {
  assets: any[] = [];

  constructor(private plansService: PlansService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.plansService.getAssets().subscribe(data => {
      this.assets = data;
    });
  }

  onDelete(id: number) {
    this.plansService.deleteAsset(id).subscribe(() => this.loadData());
  }

}
