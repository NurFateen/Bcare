import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import 'firebase/compat/database'
import {FirebaseTSFirestore} from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
@Component({
  selector: 'app-changeplan',
  templateUrl: './changeplan.page.html',
  styleUrls: ['./changeplan.page.scss'],
})
export class ChangeplanPage implements OnInit {
 private firestore: FirebaseTSFirestore;

constructor(private router: Router){
}


  ngOnInit(){

  }
  previous(){
    this.router.navigate(['/yourplan']);
    }

  changebasic(){
    this.firestore=new FirebaseTSFirestore();
    this.firestore.update(
    {
      path:["USERS_PLAN","1"],
      data:{
        name:"Basic_Plan",
        price:"$10.00",
        reward:["20 products", "Revenue up to $150", "5% transaction fee"],
        image:["https://firebasestorage.googleapis.com/v0/b/beautycare-2fd4f.appspot.com/o/Plans%2FBASIC.png?alt=media&token=6e2d921b-29f3-4a78-9c18-0e627e38b5a2"]
      },
      onComplete:(docid)=>{
        alert("Plan changed to Basic");
        this.router.navigate(['/subscribedplan']);
      },
      onFail:(err)=>{
        alert("failed");
      }
    }
  )
  }
  changestandard(){
    this.firestore=new FirebaseTSFirestore();
    this.firestore.update(
    {
      path:["USERS_PLAN","1"],
      data:{
        name:"Standard_Plan",
        price:"$20.00",
        reward:["50 products", "Revenue up to $500", "5% transaction fee"],
        image:["https://firebasestorage.googleapis.com/v0/b/beautycare-2fd4f.appspot.com/o/Plans%2FSTANDARD.png?alt=media&token=7608c11e-7556-4910-b104-e6a40235dff6"]
      },
      onComplete:(docid)=>{
        alert("Plan changed to Standard");
        this.router.navigate(['/subscribedplan']);//nda mau?
      },
      onFail:(err)=>{
        alert("failed");
      }
    }
  )

  }
  changepremium(){
    this.firestore=new FirebaseTSFirestore();
    this.firestore.update(
    {
      path:["USERS_PLAN","1"],
      data:{
        name:"Premium_Plan",
        price:"$50.00",
        reward:["200 products", "Revenue up to $1000", "5% transaction fee"],
        image:["https://firebasestorage.googleapis.com/v0/b/beautycare-2fd4f.appspot.com/o/Plans%2FPREMIUM.png?alt=media&token=60696718-725b-4f2d-9e07-a15bc340cc9c"]
      },
      onComplete:(docid)=>{
        alert("Plan changed to Premium");
        this.router.navigate(['/subscribedplan']);
      },
      onFail:(err)=>{
        alert("failed");
      }
    }
  )
  }
  
   
}
