import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {render} from 'creditcardpayments/creditCardPayments';  
import { AuthService } from 'src/app/services/auth.service';
import {FirebaseTSFirestore} from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {jsPDF} from "jspdf";
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})

export class PaymentPage implements OnInit {
  private firestore:FirebaseTSFirestore;
  dataRef: any;
  name: string;
  price:number;
  reward:string;
  
//  @ViewChild('myNameElem') myNameElem: ElementRef;
  @ViewChild('content',{static: false})el!: ElementRef;
  http: any;

  //  getValue() {
  //   console.log(this.myNameElem.nativeElement.value);
  // }

  constructor(private router: Router, 
    private authService: AuthService,
    private db:AngularFireDatabase,
    private storage: AngularFireStorage
    ) { 
    
      
    this.firestore=new FirebaseTSFirestore();
    
    //retrieve
    this.firestore. listenToDocument(
    {
      name: "USERS_LISTENER",
      path:["USERS_PLAN","1"],
      onUpdate:(result) => {
        this.dataRef = result.data();
      }
      
    }
    )
  

    // const amountElement = document.getElementById('amount') as HTMLElement
    // console.log(amountElement)

  render(
      {
        id:"#myPaypalButtons",
        currency:"SGD",
        value: "10",
        onApprove:(details)=>{
           alert("transaction successful!");
           this.router.navigate(['/proceed']);
        }
      }
    )
    
   
  }//closing constructor
 

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
    
    
    
     makePDF(){
      //retrieve user collection
      // this.firestore. listenToDocument(
      //   {
      //     name: "USERS_LISTENERs",
      //     path:["users","H2ar0OevL6Tg8EzdmCiokWqtCHY2"],
      //     onUpdate:(results) => {
      //       this.dataRef = results.data();
      //     }
          
      //   }
      //   )

      let pdf =new jsPDF('p','pt','a4');
      pdf.html(this.el.nativeElement,{
        callback:(pdf)=>{
          pdf.save("Payment.pdf");
        }
      });
      

     }

  ngOnInit() {

  }
 
  previous(){
    this.router.navigate(['/yourplan']);
  }
}


