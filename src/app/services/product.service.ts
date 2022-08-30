import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    productCol: AngularFirestoreCollection<Product>;
    productDoc: AngularFirestoreDocument<Product>;
    products: Observable<Product[]>;
    product: Observable<Product>;
    product$: any;

  constructor(
    private afs: AngularFirestore
  )
   {
    this.productCol = this.afs.collection('product', ref => ref.orderBy('createdAt', 'desc'));

    this.products = this.productCol.snapshotChanges().pipe(
      map(action => {
        return action.map(
          a => 
          {
            const data = a.payload.doc.data() as Product;
            data.productId = a.payload.doc.id;
            return data;
          }
        )
      })
    );
    } // end of constructir

  getProducts(){
    return this.products;
  } // end of get product list

  getProduct(productId){
    this.productDoc = this.afs.doc<Product>(`product/${productId}`);
    return this.product = this.productDoc.valueChanges();
  } //end of get to product

}
