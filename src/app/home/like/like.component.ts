import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-like-button',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class LikeComponent implements OnInit {
  public like = false;

  constructor() {}

  ngOnInit() {}

  toggleLike() {
    this.like = !this.like;
  }
}
