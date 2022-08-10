import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-subscribedplan',
  templateUrl: './subscribedplan.page.html',
  styleUrls: ['./subscribedplan.page.scss'],
})
export class SubscribedplanPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  previous(){
    this.router.navigate(['/changeplan']);
    }
}
