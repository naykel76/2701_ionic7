import { Component, ViewChild } from '@angular/core';
import { IonicModule, IonPopover } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { StorageService } from '../services/storage.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    standalone: true,
    imports: [IonicModule, FormsModule],
})
export class Tab3Page {

    name: any;
    reminder: any;
    showNotifications: any;

    // why won't you work in app.component.ts
    constructor(private storageService: StorageService) {
        // this.setName()
        this.getName();
    }

    async setName() {
        await this.storageService.set('name', 'Mike');
    }

    async getName() {
        this.name = await this.storageService.get('name');
        console.log(this.name);
    }


    async getReminder() {
        this.reminder = await this.storageService.get('reminder');
    }
    async getShowNotifications() {
        this.showNotifications = await this.storageService.get('showNotifications');
    }

    // this.setValue('name', 'Bill');
    // this.setValue('reminder', '27/05/2023');
    // this.setValue('showNotifications', true);


    async setValue(key: string, value: any) {
        await this.storageService.set(key, value);
    }


    //

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
