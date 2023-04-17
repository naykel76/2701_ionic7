import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonItemSliding, IonList, IonicModule, ModalController } from '@ionic/angular';
import { ModalContactPage } from '../modal-contact/modal-contact.page';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule],
})
export class Tab1Page {


    contacts = [{
        firstName: 'Billy',
        lastName: 'Jones',
        email: 'billy@email.com.au'
    },
    {
        firstName: 'Sue',
        lastName: 'Williams',
        email: 'sue@email.com.au'
    },
    {
        firstName: 'Mike',
        lastName: 'McDingle',
        email: 'mike@email.com.au'
    }];

    // 2. inject ModalController into the constructor
    constructor(private modal: ModalController) { }

    // 3. create async function to open the modal to create a new contact
    async createContact() {
        const modal = await this.modal.create({
            component: ModalContactPage,
            componentProps: {}
        })

        // 4. handle data when modal is closed (save).
        modal.onDidDismiss()
            .then((res) => {
                if (res.role == 'cancel') {
                    console.log('do nothing');
                } else {
                    this.contacts.push(res.data);
                }
            });

        return modal.present();
    }

    async editContact(i: number, slider: IonList) {
        console.log(i)

        const modal = await this.modal.create({
            component: ModalContactPage,
            componentProps: { id: i, contact: this.contacts[i] }
        })

        modal.onDidDismiss()
            .then((res) => {
                if (res.role == 'cancel') {
                    console.log('do nothing');
                } else {
                    this.contacts[i] = res.data;
                }
            }).finally(() => {
                slider.closeSlidingItems();
            });

        return modal.present();
    }



    delete(i: number) {
        if (confirm('Delete ' + this.contacts[i].firstName)) {
            this.contacts.splice(i, 1);
        }
    }
}
