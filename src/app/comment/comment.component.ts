import { Component, OnInit } from '@angular/core';
import {CommentPayload} from "../add-comment/comment-payload";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment: CommentPayload;
  permaLink: number;

  constructor() { }

  ngOnInit() {
  }

}
