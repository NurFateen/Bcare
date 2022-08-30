import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-proedit',
  templateUrl: './proedit.page.html',
  styleUrls: ['./proedit.page.scss'],
  providers: [ProductService]
})
export class ProeditPage implements OnInit {
  productId: string;
  name: string;
  stock: number;
  price: number;
  description: string;
  ingredient: string;
  category: string;
  status: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController
  ) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params['productId'];
  }

  ionViewWillEnter(){
    this.loadProduct();
  }
  async loadProduct(){
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'crescent',
      showBackdrop: true
    });

    loading.present();

    this.productService.getProduct(this.productId).subscribe(product => {
      this.name = product.name;
      this.stock = product.stock;
      this.price = product.price;
      this.description = product.description;
      this.ingredient = product.ingredient;
      this.category = product.category;
      this.status = status;
      loading.dismiss();
    }
    
    ) }; // end of load todo


    async UpdateProduct(){
      const loading = await this.loadingCtrl.create({
        message:'Updated..',
        spinner: 'crescent',
        showBackdrop: true

      });

      loading.present();

      this.afs.collection('product').doc(this.productId).set({
        'name': this.name,
        'stock': this.stock,
        'price': this.price,
        'description': this.description,
        'ingredient': this.ingredient,
        'category': this.category,
        'status' : status
      },{merge: true})
      .then(()=>{
        loading.dismiss();
        this.toast('Product Updated', 'Success');
        this.router.navigate(['/product-list']);
      })
      .catch((error)=> {
        loading.dismiss();
        this.toast(error.message, 'danger');
      });
    } //end of todo list

    async toast(msg, status){
      const toast = await this.toastr.create({
        message: msg,
        position: 'top',
        color: status,
        duration: 2000
      });
    
      toast.present();
     } //end of toastr
}