import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'platform'
})
export class PlanService {


  
  constructor(private db:AngularFireDatabase) { }
  getAll(): Observable<any[]>{
    return this.db.list<any>("/plans")
    .snapshotChanges()
    .pipe(
      map(x => x.map((y:any) => ({...y.payload.val(), id: y.payload.key})))
    )
  }
}
