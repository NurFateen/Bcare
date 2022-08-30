import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore,private firestore:Firestore) { }

  change_plan(Record){
  return this.fireservices.collection('Plans').add(Record);
  }
}
