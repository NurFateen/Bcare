import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {paypal, render} from 'creditcardpayments/creditCardPayments';  
import { Alert } from 'selenium-webdriver';
import { UserCredential } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';
import {FirebaseTSFirestore} from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { snapshotChanges } from '@angular/fire/compat/database';
import{doc, DocumentData, DocumentReference,Firestore,getDoc,setDoc,docData} from '@angular/fire/firestore'
import { DatabaseReference } from '@angular/fire/compat/database/interfaces';
import { privateDecrypt } from 'crypto';
import { ref } from '@angular/fire/storage';
import { sendEmailVerification } from 'firebase/auth';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  private firestore:FirebaseTSFirestore;
  dataRef: any;
  name: string;
  price:string;
  reward:string;
  package:string;
  
  constructor(private router: Router, private authService: AuthService) { 
    this.firestore=new FirebaseTSFirestore();
    
    //retrieve
    this.firestore.listenToDocument(
    {
      name: "USERS_LISTENER",
      path:["USERS_PLAN","2"],
      onUpdate:(result) => {
        this.dataRef = result.data();
      }
    }
    )
    
    render(
      {
        id:"#myPaypalButtons",
        currency:"SGD",
        value:"10.00",
        onApprove:(details)=>{
           alert("transaction successful!");
           this.router.navigate(['/proceed']);
        }
      }
    )
    
   
  }

  paypal(){
     
     this.firestore.create(
      {
       path:["User_Subcription_Payment","5"],
       data:{
        amount:this.dataRef?.price,
        currency:"SGD",
        plans:this.dataRef?.reward
       },
       onComplete:(docId) => {
        alert("Processing your payment");
        
        
       },
       onFail:(err)=>{
        alert("failed");
       }
      }
    )
    }
    

  ngOnInit() {

  }
 
  previous(){
    this.router.navigate(['/yourplan']);
  }
}
// function snapshot(snapshot: any) {
//   throw new Error('Function not implemented.');
// }

