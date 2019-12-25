import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CommentPayload} from "./comment-payload";
import {AddCommentService} from "../add-comment.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  addCommentForm: FormGroup;
  commentPayload: CommentPayload;
  body = new FormControl('');

  constructor(private addcommentService: AddCommentService, private router: Router) {
    this.addCommentForm = new FormGroup({
      body: this.body
    });
    this.commentPayload = {
      postId: '',
      username: '',
      content: '',
      commentId: ''
    };
  }

  ngOnInit() {
  }

  addComment() {
    this.commentPayload.content = this.addCommentForm.get('body').value;
    this.addcommentService.addComment(this.commentPayload).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    });
  }
}
