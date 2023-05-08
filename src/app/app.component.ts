import { Component, EnvironmentInjector, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule],
})
export class AppComponent implements OnInit {

    public environmentInjector = inject(EnvironmentInjector);

    constructor(private userService: UserService) { }

    async ngOnInit() {
        await this.userService.setName();
        await this.userService.setReminder();
        await this.userService.setShowNotifications();
    }

}


