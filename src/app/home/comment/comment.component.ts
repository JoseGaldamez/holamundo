import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class CommentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
