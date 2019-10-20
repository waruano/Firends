import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.page.html',
  styleUrls: ['./report-form.page.scss'],
})
export class ReportFormPage implements OnInit {
  
  ngOnInit() {
  }

  numb: string = null;
  notification: string = "Incendio RURAL (BOSQUE) de NIVEL 3 reportado en MEDELLÍN, a 1.5kms de tu ubicación. Puedes ayudar asistiendo con: Palas (azadón, pica); machetes;Tapabocas;Hidratación. Contacta a PETER PARKER en el punto de encuentro.";
  whatsapp: string = null;
  constructor(public navCtrl: NavController, private socialSharing: SocialSharing) { }

  sharewhats(){
    this.whatsapp = "https://api.whatsapp.com/send?phone=57"+this.numb+"&text="+this.notification;
    console.log(this.whatsapp);
    window.open(this.whatsapp);
  }

  sharefb(){
    this.whatsapp = "https://api.whatsapp.com/send?phone=57"+this.numb+"&text="+this.notification;
    console.log(this.whatsapp);
    this.socialSharing.share(this.whatsapp)
    .then(()=>{

    }).catch(()=>{

    });
  }

}
