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

    constructor(private storageService: StorageService) { }

    async setValue(key: string, value: any) {
        await this.storageService.set(key,  value);
    }

    async getName() {
        this.name = await this.storageService.get('name');
    }

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
