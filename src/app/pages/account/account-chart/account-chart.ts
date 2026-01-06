import { Component, Input, OnChanges, ViewChild } from "@angular/core";
import { NgApexchartsModule, ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexStroke, ApexYAxis, ApexLegend, ApexFill } from "ng-apexcharts";
import { CommonModule } from "@angular/common";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  fill: ApexFill;
  legend: ApexLegend;
  colors: string[];
};

@Component({
  selector: 'app-account-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './account-chart.html',
  styleUrl: './account-chart.css'
})
export class AccountChart implements OnChanges {
  @Input() data!: { series: any[], dates: string[] };
  
  public chartOptions: Partial<ChartOptions> | any;
  public xaxis: ApexXAxis | any;

  constructor() {
    this.initChart();
  }

  ngOnChanges() {
    if (this.data && this.data.series) {
      this.updateChart();
    }
  }

  private initChart() {
    this.chartOptions = {
      chart: {
        type: "area",
        height: 350,
        toolbar: { show: false },
        animations: { enabled: true }
      },
      stroke: { curve: "smooth", width: 2 },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100]
        }
      },
      legend: { labels: { colors: '#ccc' } },
      yaxis: { labels: { style: { colors: '#888' } } }
    };
  }

  private updateChart() {
    this.chartOptions.series = this.data.series;
    this.chartOptions.colors = this.data.series.map(s => s.color);
    this.xaxis = {
      categories: this.data.dates,
      labels: { style: { colors: '#888' } }
    };
  }
}