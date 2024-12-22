import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.renderProgressChart();
    this.renderResourceChart();
  }

  renderProgressChart() {
    const canvas = document.getElementById('progressChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Completed', 'In Progress', 'Pending'],
          datasets: [
            {
              data: [40, 30, 30],
              backgroundColor: ['#28a745', '#ffc107', '#dc3545']
            }
          ]
        }
      });
    }
  }

  renderResourceChart() {
    const canvas = document.getElementById('resourceChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Project Alpha', 'Project Beta', 'Project Gamma'],
          datasets: [
            {
              label: 'Hours Allocated',
              data: [50, 30, 20],
              backgroundColor: ['#007bff', '#17a2b8', '#6f42c1']
            }
          ]
        }
      });
    }
  }
}
