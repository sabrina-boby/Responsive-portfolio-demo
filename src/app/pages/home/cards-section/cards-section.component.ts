import { Component, Input } from '@angular/core';
import { CARD } from 'src/app/core/db/card.db';

@Component({
  selector: 'app-cards-section',
  templateUrl: './cards-section.component.html',
  styleUrls: ['./cards-section.component.scss']
})
export class CardsSectionComponent {
  i: any[] = CARD ;
  imageUrls: string[] = [];
  imageUrls1: string[] = [];

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.imageUrls.push("../../../../assets/images/img/img.jpg");
      this.imageUrls1.push("../../../../assets/images/img/download.jpg");
    }
  }
}
