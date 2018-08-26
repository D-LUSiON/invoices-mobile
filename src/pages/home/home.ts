import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InvoiceEditPage } from '../invoice-edit/invoice-edit';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    newInvoice(event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(InvoiceEditPage, {
            item: null
        });
    }

}
