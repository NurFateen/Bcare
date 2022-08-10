import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-changeplan',
  templateUrl: './changeplan.page.html',
  styleUrls: ['./changeplan.page.scss'],
})
export class ChangeplanPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeplan(){
  this.router.navigate(['/subscribedplan']);
}
  previous(){
  this.router.navigate(['/yourplan']);
  }

}
