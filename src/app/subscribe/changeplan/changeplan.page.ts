import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/services/crud.service'; 
import { StringLike } from '@firebase/util';
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
    this.firestore.create(
    {
      path:["USERS_PLAN"],
      data:{
        name:"Basic_Plan",
        price:"$10.00",
        reward:["20 products", "Revenue up to $150", "5% transaction fee"]
      },
      onComplete:(docid)=>{
        alert("Plan changed to Basic");
      },
      onFail:(err)=>{
        alert("failed");
      }
    }
  )
   //taruh routing to subscribedplan
  }
  changestandard(){
    this.firestore=new FirebaseTSFirestore();
    this.firestore.create(
    {
      path:["USERS_PLAN"],
      data:{
        name:"Standard_Plan",
        price:"$20.00",
        reward:["50 products", "Revenue up to $500", "5% transaction fee"]
      },
      onComplete:(docid)=>{
        alert("Plan changed to Standard");
      },
      onFail:(err)=>{
        alert("failed");
      }
    }
  )
  //taruh routing to subscribedplan
  }
  changepremium(){
    this.firestore=new FirebaseTSFirestore();
    this.firestore.create(
    {
      path:["USERS_PLAN"],
      data:{
        name:"Premium_Plan",
        price:"$50.00",
        reward:["200 products", "Revenue up to $1000", "5% transaction fee"]
      },
      onComplete:(docid)=>{
        alert("Plan changed to Premium");
      },
      onFail:(err)=>{
        alert("failed");
      }
    }
  )
   //taruh routing to subscribedplan
  }
  
   
}
