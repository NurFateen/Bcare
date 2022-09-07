import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
  providers: [ProductService]
})
export class ProductDetailsPage implements OnInit {

  productId: string;
  products: Product[];

  // products: Observable<Product[]>;
  // product: Observable<Product>;
  

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    // private afs: AngularFirestore
  ) {
    this.productId = this.route.snapshot.paramMap.get('productId');
  }

async ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
    // this.product = this.productService.getProduct(this.productId);
  }
  // fetchDetail(productId: string): Observable<Product> {
  //   return this.products.collection('product').doc<Product>(productId).valueChanges();

  // }
}
