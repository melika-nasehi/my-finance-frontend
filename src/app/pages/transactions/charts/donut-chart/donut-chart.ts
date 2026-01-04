import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-donut-chart',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './donut-chart.html',
  styleUrl: './donut-chart.css',
})
export class DonutChart {
  public chartOptions: any = {
    series: [44, 55, 13, 43], 
    chart: {
      type: 'donut',
      height: 300,
      background: 'transparent',
      foreColor: '#718096' 
    },
    labels: ['Groceries', 'Entertainment', 'Gas', 'Housing'],
    stroke: {
      show: true,
      width: 2,
      colors: ['#1c1b22'] 
    },
    colors: ['#b794f4', '#63b3ed', '#f6ad55', '#fc8181'],
    legend: {
      position: 'bottom',
      fontSize: '14px',
      fontFamily: 'inherit'
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Expenses',
              fontSize: '14px',
              color: '#a0aec0'
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: false
    }
  };
}
