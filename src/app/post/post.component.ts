import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CreateCampaignService} from '../create-campaign.service';
import {CampaignPayload} from '../create-campaign/campaign-payload';
import {CommentPayload} from '../add-comment/comment-payload';
import {AddCommentService} from '../add-comment.service';
import { Observable } from 'rxjs';

// @ts-ignore
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: CampaignPayload;
  permaLink: number;
  comments: Observable<Array<CommentPayload>>

  constructor(private router: ActivatedRoute, private postService: CreateCampaignService, private commentService: AddCommentService) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.permaLink = params['postId'];
    });

    this.postService.getPost(this.permaLink).subscribe((data: CampaignPayload) => {
      this.post = data;
      console.log('data');

    }, (err: any) => {
      console.log('Failure Response');
    });

   this.comments = this.commentService.getAllComments(this.permaLink);
  }

}
1
