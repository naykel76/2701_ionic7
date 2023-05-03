import { Component, EnvironmentInjector, inject, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {

    public environmentInjector = inject(EnvironmentInjector);

    constructor(private storageService: StorageService) { }

    async ngOnInit() {

        await this.storageService.get('name') === null
            ? this.storageService.set('name', 'Paul')
            : console.log(await this.storageService.get('name'));

        await this.storageService.get('showNotifications') === null
            ? this.storageService.set('showNotifications', true)
            : console.log(await this.storageService.get('showNotifications'));

        await this.storageService.get('reminder') === null
            ? this.storageService.set('reminder', '18/05/23')
            : console.log(await this.storageService.get('reminder'));

    }

}


