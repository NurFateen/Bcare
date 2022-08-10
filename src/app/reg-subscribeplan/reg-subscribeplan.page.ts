import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reg-subscribeplan',
  templateUrl: './reg-subscribeplan.page.html',
  styleUrls: ['./reg-subscribeplan.page.scss'],
})
export class RegSubscribeplanPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';
  constructor(private router: Router,
              private alertController:AlertController) { }

  ngOnInit() {
  }

  registerplan(){
    this.router.navigate(['/login']);
  }
  
  previous(){
    this.router.navigate(['/signup']);
    }


    //Notification for successfully register
    async showAlert() {
    const alert = await this.alertController.create({
      header: 'Registration successfully.',
      subHeader: 'Thanks for signing up.',
      message: 'Please check your registerd email for email verification.',
      buttons: ['Ok']
    });

    await alert.present();
  }

}
