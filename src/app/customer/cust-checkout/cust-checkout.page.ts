
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cust-checkout',
  templateUrl: './cust-checkout.page.html',
  styleUrls: ['./cust-checkout.page.scss'],
})
export class CustCheckoutPage implements OnInit {
  form: FormGroup;

  constructor(
    private customersService: CustomerService,
    private router: Router,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        email: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fullName: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        phoneNum: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        address: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        country: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
      }
    );
  }

  onContinue() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);

    this.loadingCtrl.create({
      message: 'Proceed to Delivery Method & Total of Checkout'
    }).then(loadingE1 => {
      loadingE1.present();
      this.customersService.addCust(
        this.form.value.email,
        this.form.value.fullName,
        this.form.value.phoneNum,
        this.form.value.address,
        this.form.value.country).subscribe(() => {
          loadingE1.dismiss();
          this.form.reset();
          this.router.navigate(['customer']);
        });
    });
  }

}
