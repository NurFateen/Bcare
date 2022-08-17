import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit, OnDestroy {

  loadedList: Customer[];
  private customerSub: Subscription;
  form: any;

  constructor(private customersService: CustomerService,
              private router: Router,
              private loadCtrl: LoadingController) { }

  ngOnInit() {
    this.customerSub = this.customersService.$customers.subscribe(Customer => {
      this.loadedList = Customer;
    });
  }

  ngOnDestroy() {
    if (this.customerSub) {
      this.customerSub.unsubscribe();
      }
  }

  ionViewWillEnter() {
    this.customersService.fetchCust().subscribe();
  }

  onEdit(custId: string, itemSliding: IonItemSliding) {
    itemSliding.close();
    console.log('Editing item: ', custId);
  }

}
