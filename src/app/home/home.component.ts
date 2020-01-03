import { Component, OnInit } from '@angular/core';
import { CreateCampaignService } from '../create-campaign.service';
import { Observable } from 'rxjs';
import { CampaignPayload } from '../create-campaign/campaign-payload';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Observable<Array<CampaignPayload>>
  constructor(private postService: CreateCampaignService) { }

  ngOnInit() {
   this.posts =  this.postService.getAllPosts();
  }

}
