import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import Chart from 'chart.js/auto';

@Component({
    selector: 'app-chart',
    template: `
    <ion-content [fullscreen]="true">
            <ion-button (click)="manualTest()">Add Chart</ion-button>
            <ion-card>
                <canvas #myChart height=300></canvas>
            </ion-card>
    </ion-content>`,
    standalone: true,
    imports: [IonicModule, CommonModule]
})
export class ChartPage implements OnInit {

    @ViewChild('myChart', { static: true }) canvas: any;
    chart: any;

    data = [
        { age: 14, height: 110 },
        { age: 15, height: 115 },
        { age: 16, height: 118 },
        { age: 17, height: 127 },
        { age: 18, height: 142 }
    ];

    ngOnInit() {
        this.chart = new Chart(this.canvas.nativeElement, {
            type: 'bar',
            data: {
                labels: this.data.map(row => row.age),
                datasets: [
                    {
                        label: 'Height by year',
                        data: this.data.map(row => row.height)
                    }
                ]
            }
        });
    }

    // if you add the chart manually there are no errors
    manualTest() {
        //     this.chart = new Chart(this.canvas.nativeElement, {
        //         type: 'bar',
        //         data: {
        //             labels: this.data.map(row => row.year),
        //             datasets: [
        //                 {
        //                     label: 'Acquisitions by year',
        //                     data: this.data.map(row => row.count)
        //                 }
        //             ]
        //         }
        //     });
    }

}
