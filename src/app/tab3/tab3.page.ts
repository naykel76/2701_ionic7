import { Component, ViewChild } from '@angular/core';
import { IonicModule, IonPopover } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    standalone: true,
    imports: [IonicModule],
})
export class Tab3Page {

    @ViewChild(IonPopover) popover: IonPopover;
    reminder;

    constructor() { }

    /**
     * set reminder as human readable string
     */
    setReminder(value) {
        this.reminder = format(parseISO(value), 'dd/MM/yyyy');
    }

}


