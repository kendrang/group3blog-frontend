import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AddCommentService} from "../add-comment.service";
import {CommentPayload} from "./comment-payload";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  comment: CommentPayload;
  permaLink: number;

  constructor(private router: ActivatedRoute, private commentService: AddCommentService) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.permaLink = params['commentId'];
    });
    this.commentService.getComment(this.permaLink).subscribe((data: CommentPayload) => {
      this.comment = data;
      console.log('data');
    }, (err: any) => {
      console.log('Failure Response');
    });
  }

}
