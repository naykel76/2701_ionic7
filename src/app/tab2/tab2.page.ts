import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
    standalone: true,
    imports: [IonicModule, RouterLink, FormsModule]
})
export class Tab2Page {

    counter: number = 0;
    username: string = '';

    constructor(private router: Router) { }

    ngOnInit() {
    }

    increment() {
        this.counter++;
    }

    login() {
        this.increment()
        this.router.navigateByUrl('/account/' + this.username);
    }

}
