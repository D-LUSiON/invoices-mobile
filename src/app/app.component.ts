import { Component, ViewChild, OnDestroy } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Insomnia } from '@ionic-native/insomnia';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: 'app.html'
})
export class MyApp implements OnDestroy {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    pages: Array<{ title: string, component: any }>;

    batt_subs: Subscription;

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        private insomnia: Insomnia,
        private batteryStatus: BatteryStatus,
    ) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Начало', component: HomePage },
            { title: 'Списък на фактури', component: ListPage }
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.batt_subs = this.batteryStatus.onChange().subscribe(status => {
                if (status.isPlugged){
                    this.insomnia.keepAwake();
                } else {
                    this.insomnia.allowSleepAgain();
                }
             });
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    ngOnDestroy() {
        if (this.batt_subs)
            this.batt_subs.unsubscribe();
    }

}
