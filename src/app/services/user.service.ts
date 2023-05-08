import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private storageService: StorageService) { }

    user = {
        name: 'Paul McGregor',
        reminder: '18/05/23',
        showNotifications: true
    }

    async setName() {
        const name = (await this.storageService.get('name')) || this.user.name;
        await this.storageService.set('name', name);
    }

    async setReminder() {
        const date = (await this.storageService.get('reminder')) || this.user.reminder;
        await this.storageService.set('reminder', date);
    }

    async setShowNotifications() {
        await this.storageService.get('showNotifications')
            ?? this.storageService.set('showNotifications', this.user.showNotifications);
    }

}
