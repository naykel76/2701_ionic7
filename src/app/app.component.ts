import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { StorageService } from './services/storage.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule],
})
export class AppComponent {
    public environmentInjector = inject(EnvironmentInjector);

    name;
    showNotifications;
    reminder;

    constructor(storageService: StorageService) {
        this.name = storageService.set('name', 'Bill');
        this.name = storageService.set('reminder', '27/05/2023');
        this.name = storageService.set('showNotifications', true);
    }

    //   <ion-button (click)="setValue('name', 'Bill')">Set Value</ion-button>
    //   <ion-button (click)="getName()">Get Name</ion-button>
    //   <ion-button (click)="removeValue('name')">Remove</ion-button>
    //   <ion-button (click)="clearStorage()">Clear</ion-button>
}
