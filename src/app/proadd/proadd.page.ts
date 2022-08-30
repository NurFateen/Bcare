import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-proadd',
  templateUrl: './proadd.page.html',
  styleUrls: ['./proadd.page.scss'],
})
export class ProaddPage implements OnInit {

  name: string;
  stock: number;
  price: number;
  description: string;
  ingredient: string;
  category: string;
  filepdf: File;
  status: string;

  constructor(private afs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private router: Router,
    private toastr: ToastController) { }

  ngOnInit() {
  }
  async addProduct(){
    if(this.name && this.stock && this.price && this.description && this.ingredient){
      const loading = await this.loadingCtrl.create({
        message: 'add product..',
        spinner: 'crescent',
        showBackdrop: true
      });
      loading.present();

      const productId = this.afs.createId();

      this.afs.collection('product').doc(productId).set({
        'productId': productId,
        'name': this.name,
        'stock': this.stock,
        'price': this.price,
        'description': this.description,
        'ingredient': this.ingredient,
        'category': this.category,
        'status':'',
        'createdAt': Date.now()
      })
      .then(()=> {
        loading.dismiss();
        this.toast('Product Successfully Added!', 'Success');
        this.router.navigate(['/product-list']);
      })
      .catch((error)=> {
        loading.dismiss();
        this.toast(error.message, 'danger')
      })
    }
  } // end of addtask

  async toast(msg, status)
  { const toast = await this.toastr.create({
    message: msg,
    position: 'top',
    color: status,
    duration: 2000

  });
  toast.present();
}
  
 


}
