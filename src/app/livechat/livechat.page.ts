import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanService } from '../services/plan.service';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-livechat',
  templateUrl: './livechat.page.html',
  styleUrls: ['./livechat.page.scss'],
})
export class LivechatPage implements OnInit {
plans:any[];

  constructor(
    private planService: PlanService,
    private router: Router,
    firestore: AngularFirestore,
    http: HttpClient,
    storage: Storage) { }
  
  ngOnInit():void {
    this.planService.getAll().subscribe(p => this.plans = p);
  }

}
