import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import Chart from 'chart.js/auto';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-chart',
    template: `
    <ion-content [fullscreen]="true">
            <ion-item>
                <ion-input [(ngModel)]="heightData.age" label="Age" type="tel"></ion-input>
            </ion-item>
            <ion-item>
                <ion-input [(ngModel)]="heightData.height" label="Height" type="tel"></ion-input>
            </ion-item>

            <ion-button (click)="add()">Add Chart</ion-button>
            <ion-card>
                <canvas #myChart height=300></canvas>
            </ion-card>
    </ion-content>`,
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class ChartPage implements OnInit {

    @ViewChild('myChart', { static: true }) canvas: any;
    chart: any;

    heightData: any = {
        age: '',
        height: '',
    };

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

    updateChart() {
        // update the labels
        this.chart.data.labels = this.data.map(row => row.age);
        // update the display data
        this.chart.data.datasets[0].data = this.data.map(row => row.height);
        // run the chart update method
        this.chart.update();
    }

    add() {
        this.data.push({ age: this.heightData.age, height: this.heightData.height });
        this.updateChart();
        // reset fields
        this.heightData = {
            age: '',
            height: '',
        };
    }

}
