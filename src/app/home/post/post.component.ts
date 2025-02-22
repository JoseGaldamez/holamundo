import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LikeComponent } from '../like/like.component';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  imports: [IonicModule, LikeComponent, CommentComponent],
})
export class PostComponent implements OnInit {
  @Input() title: string = '';
  @Input() date: string = '';
  constructor() {}

  ngOnInit() {}
}
