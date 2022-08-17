import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust-profile',
  templateUrl: './cust-profile.page.html',
  styleUrls: ['./cust-profile.page.scss'],
})
export class CustProfilePage implements OnInit {
  cards;
  selectedCardIndex = 0;

  constructor() { 
    this.cards = [
      {
        img: ""
      },
      {
        img: "https://flyclipart.com/thumb2/female-avatar-hospital-staff-lady-doctor-icon-with-png-754945.png"
      },
      {
        img: "https://img.favpng.com/15/21/22/computer-icons-avatar-woman-png-favpng-Li0DWHA23YRCUqWaRXMJ7t6AK.jpg"
      },
    ];
  }

  ngOnInit() {
  }

  logEvent(event) {
    const newIndex = this.selectedCardIndex + 1;

    if (newIndex === this.cards.length) {
      this.selectedCardIndex = 0;
    } else {
      this.selectedCardIndex = newIndex;
    }
  }

}
