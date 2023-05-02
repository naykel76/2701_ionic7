import { Component, ViewChild } from '@angular/core';
import { IonicModule, IonPopover } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { StorageService } from '../services/storage.service';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    standalone: true,
    imports: [IonicModule],
})
export class Tab3Page {

    name: any;
    reminder: any;
    showNotifications: any;

    constructor(private storageService: StorageService) {

        this.getName();

    }

    async getName() {
        this.name = await this.storageService.get('name');
    }

    // this.name = storageService.get('name');
    // this.reminder = storageService.get('reminder');
    // this.showNotifications = storageService.get('showNotifications');

    async setValue(key: string, value: any) {
        await this.storageService.set(key, value);
    }

    // async getName() {
    //     this.name = await this.storageService.get('name');
    // }

    async removeValue(key: string) {
        await this.storageService.remove(key);
    }

    async clearStorage() {
        await this.storageService.clear();
    }

    // /**
    //  * set reminder as human readable string
    //  */
    setReminder(value) {
        //     this.reminder = format(parseISO(value), 'dd/MM/yyyy');
    }

}

// @ViewChild(IonPopover) popover: IonPopover;

    // remember;
    // showNotifications;

    // name: string = 'Bill';
    // remember: string = '22/05/2023';
    // showNotifications: boolean = true;
