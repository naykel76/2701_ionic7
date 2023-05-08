import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { StorageService } from '../services/storage.service';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    standalone: true,
    imports: [IonicModule, FormsModule],
})
export class Tab3Page implements OnInit {

    name: any;
    reminder: any;
    showNotifications: any;

    constructor(private storageService: StorageService, private userService: UserService) { }

    async ngOnInit() {
        this.name = await this.storageService.get('name');
        this.reminder = await this.storageService.get('reminder');
        this.showNotifications = await this.storageService.get('showNotifications');
    }

    // NK!! this is not the most efficient way because it will update all
    // regardless
    async update(){
        await this.storageService.set('name', this.name);
        await this.storageService.set('reminder', this.reminder);
        await this.storageService.set('showNotifications', this.showNotifications);
    }

    // is there a way to call this method direct from the service??
    async clearStorage() {
        await this.storageService.clear();
        console.log();
    }

    /**
     * set reminder as human readable string
     */
    setReminder(value) {
        this.reminder = format(parseISO(value), 'dd/MM/yyyy');
    }

}
