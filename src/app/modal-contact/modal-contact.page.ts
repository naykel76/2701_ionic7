import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';
import { Contact } from '../interface/contact';

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.page.html',
  styleUrls: ['./modal-contact.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ModalContactPage implements OnInit {

  contact: Contact = {
    firstName: '',
    lastName: '',
    email: ''
  }

  id?: number;
  editing: boolean;

  constructor(private modal: ModalController, private navParams: NavParams) {
    this.editing = this.navParams.get('editing');
  }

  ngOnInit() {
    console.log(this.navParams);
  }

  /**
   * close the modal and set data and role
   */
  save() {
    this.modal.dismiss(this.contact, 'saved');
  }

  /**
   * close the modal setting data = null, and role = cancel
   */
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

}
