import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  providers: [ProductService]
})
export class ProductListPage implements OnInit {
  products: Product[];
  public listOfproduct: any[];
  public loadedListProduct: any[];

  constructor(
    private productService: ProductService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private toastr: ToastController, 
    private afs: AngularFirestore
  ) { }

  async ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
});
      this.afs.collection(`product`).valueChanges().subscribe(listOfproduct=> {
        this.listOfproduct = listOfproduct;
        this.loadedListProduct = listOfproduct;
      
    });

  }
  initializeItems(): void {
    this.listOfproduct = this.loadedListProduct;
  }

  //filter searchbar
  searchVendor(evt) {
    this.initializeItems();

    const searchTerm = evt.srcElement.value;

    if(!searchTerm){
      return;
    }
    this.listOfproduct = this.listOfproduct.filter(currentList => {
      if(currentList.name && searchTerm) {
        if(currentList.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });
  
   }

addNewProduct(){
  this.router.navigate(['/proadd']);
}

 edit(productId){
    this.router.navigate(['/proedit', productId]);
  }
 async delete(productId){
  const loading = await this.loadingCtrl.create({
    message:'Deleting..',
    spinner:'crescent',
    showBackdrop: true
  });

  loading.present();
  this.afs.collection('product').doc(productId).delete()
  .then(()=> {
    loading.dismiss();
    this.toast('Product Deleted!','success')
  })
  .catch((error)=> {
    this.toast(error.message, 'danger')
    
  });
 }// end of delete task

 async done(productId){
    const loading= await this.loadingCtrl.create({
      message: 'Updating status..',
      spinner:'crescent',
      showBackdrop: true
    });
    loading.present();
    this.afs.collection('product').doc(productId).update({
      'status':'Done'
    })
    .then(()=> {
      loading.dismiss();
      this.toast('Product Updated!', 'success');
    })
    .catch((error)=>{
    loading.dismiss();
    this.toast(error.message, 'danger');
  })
 }

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
