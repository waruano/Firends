
import { Component } from '@angular/core';
import { ReportFormPage } from '../report-form/report-form.page';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public navCtrl: NavController) {}

  Report(){
    this.navCtrl.navigateForward('/report-form');
   }

}
