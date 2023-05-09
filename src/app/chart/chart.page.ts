import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class ChartPage {

    @ViewChild('healthChart', { static: true }) canvas;
    chart: any;

    constructor() { }

    async AfterViewInit() {

        const data = [
            { year: 2010, count: 10 },
            { year: 2011, count: 20 },
            { year: 2012, count: 15 },
            { year: 2013, count: 25 },
            { year: 2014, count: 22 },
            { year: 2015, count: 30 },
            { year: 2016, count: 28 },
        ];

        this.chart = new Chart(this.canvas.nativeElement, {
            type: 'bar',
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: data.map(row => row.count)
                    }
                ]
            }
        });

    }

}
