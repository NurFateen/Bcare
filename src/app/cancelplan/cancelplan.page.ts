import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cancelplan',
  templateUrl: './cancelplan.page.html',
  styleUrls: ['./cancelplan.page.scss'],
})
export class CancelplanPage  {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  previous(){
    this.router.navigate(['/yourplan']);
  }
}
