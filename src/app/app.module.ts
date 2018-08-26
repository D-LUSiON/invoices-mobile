import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InvoiceEditPage } from '../pages/invoice-edit/invoice-edit';
import { ReceiversPage } from '../pages/receivers/receivers';

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
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
