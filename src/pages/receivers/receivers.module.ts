import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceiversPage } from './receivers';

@NgModule({
  declarations: [
    ReceiversPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceiversPage),
  ],
})
export class ReceiversPageModule {}
