import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-account',
    templateUrl: './account.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class AccountPage implements OnInit {

    username: string;
    routeParamsSubscription;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.routeParamsSubscription = this.route.params.subscribe(params => {
            this.username = params['username']
        })
    }

}
