import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-proceed',
  templateUrl: './proceed.page.html',
  styleUrls: ['./proceed.page.scss'],
})
export class ProceedPage implements OnInit {

  constructor(private router:Router ){}

  ngOnInit() {
  }
  previous(){
    this.router.navigate(['/payment']);
  }
 
}
