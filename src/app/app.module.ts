import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Insomnia } from '@ionic-native/insomnia';
import { BatteryStatus } from '@ionic-native/battery-status';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InvoiceEditPage } from '../pages/invoice-edit/invoice-edit';
import { ReceiversPage } from '../pages/receivers/receivers';
import { RethinkdbProvider } from '../providers/rethinkdb/rethinkdb';
import { RecipientsProvider } from '../providers/recipients/recipients';
import { ProvidersProvider } from '../providers/providers/providers';
import { InvoicesProvider } from '../providers/invoices/invoices';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        InvoiceEditPage,
        ReceiversPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        ReactiveFormsModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        InvoiceEditPage,
        ReceiversPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Insomnia,
        BatteryStatus,
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        },
        RethinkdbProvider,
        RecipientsProvider,
        ProvidersProvider,
    InvoicesProvider,
    ]
})
export class AppModule { }
