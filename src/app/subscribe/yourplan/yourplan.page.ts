import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-yourplan',
  templateUrl: './yourplan.page.html',
  styleUrls: ['./yourplan.page.scss'],
})
export class YourplanPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';
  constructor(private router: Router, private alertController:AlertController) {}

  async cancel() {
    
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'YES',
          role: 'yes',
          handler: () => { this.router.navigate(['/cancelplan']); }
        },
        {
          text: 'NO',
          role: 'no',
          handler: () => { this.handlerMessage = 'Alert cancelled'; }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

change(){
  this.router.navigate(['/changeplan']);
}

pay(){
  this.router.navigate(['/payment']);
}



ngOnInit() {
    
}


}
