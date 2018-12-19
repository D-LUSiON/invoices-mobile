import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Invoice, Recipient, Provider } from '../../models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tools } from '../../tools';
import { RethinkdbProvider } from '../../providers/rethinkdb/rethinkdb';
import { RecipientsProvider } from '../../providers/recipients/recipients';

/**
 * Generated class for the InvoiceEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-invoice-edit',
    templateUrl: 'invoice-edit.html',
})
export class InvoiceEditPage {
    invoice: Invoice = new Invoice();
    recipients: Recipient[] = [];
    providers: Provider[] = [];
    invoice_form: FormGroup;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private _fb: FormBuilder,
        private _recipientsProvider: RecipientsProvider
    ) {
        this.invoice = new Invoice(navParams.get('invoice'));
        this.initForm();
    }

    ionViewDidLoad() {

    }

    initForm() {
        this.invoice_form = this._fb.group({
            '_id': this._fb.control(this.invoice._id),
            'last_segment': this._fb.control('invoice'),
            'status': this._fb.control(this.invoice.status),
            'number': this._fb.control(this.invoice.number, [Validators.required]),
            'issue_date': this._fb.control(this.invoice.issue_date || this.today, [Validators.required]),
            'issue_place': this._fb.control(this.invoice.issue_place),
            'recipient': this._fb.control(this.invoice.recipient, [/* TODO: create custom validator */]),
            'type': this._fb.control(this.invoice.type),
            'notes': this._fb.control(this.invoice.notes),
            'provider': this._fb.group({
                '_id': this._fb.control(this.invoice.provider._id),
                'organization': this._fb.control(this.invoice.provider.organization, [Validators.required]),
                'acc_person': this._fb.control(this.invoice.provider.acc_person),
                'address': this._fb.control(this.invoice.provider.address),
                'vat': this._fb.control(this.invoice.provider.vat, [Validators.required]),
                'vat2': this._fb.control(this.invoice.provider.vat2)
            }),
            'goods': this._fb.array([]), // Not implemented yet
            'total_sum': this._fb.control(this.invoice.total_sum, [Validators.required]),
            'creation_date': this._fb.control(this.invoice.creation_date),
            'update_date': this._fb.control(this.invoice.update_date),
        });
    }

    get today() {
        const date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate();

        return `${year}-${month < 10 ? '0' + month : month}-${
            day < 10 ? '0' + day : day
            }`;
    }

    segmentChanged(event) {
        console.log(event);
    }

    addNewRecipient() {
        console.log('add new recipient');
    }

    recipientSelect(event) {
        console.log(event);
    }

    providerSelect(event) {
        console.log(event);
    }

    onSubmit() {
        const invoice = new Invoice(this.invoice_form.value);
        if (!invoice._id)
            invoice.creation_date = Tools.formatDate(new Date(), 'yyyy-MM-ddTHH:mm:ss.mssZ');

        invoice.update_date = Tools.formatDate(new Date(), 'yyyy-MM-ddTHH:mm:ss.mssZ');

        console.log(invoice);

    }

}
