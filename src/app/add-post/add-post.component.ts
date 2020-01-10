import {Component, OnInit, SecurityContext} from '@angular/core';
import {FormControl, FormGroup, NgModel} from '@angular/forms';
import {PostPayload} from './post-payload';
import {AddPostService} from '../add-post.service';
import {Router} from '@angular/router';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {SafeUrlPipe} from '../safe-url-pipe.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  addPostForm: FormGroup;
  postPayload: PostPayload;
  title = new FormControl('');
  value = new FormControl();

  constructor(private addpostService: AddPostService, private router: Router, private sanitizer: DomSanitizer) {
    this.addPostForm = new FormGroup({
      title: this.title,
      // body: this.body
    });
    this.postPayload = {
      postId: '',
      username: '',
      content: '',
      title: ''
    };
  }

  ngOnInit() {
  }

  addPost() {
    console.log(this.addPostForm.get('body'));
    this.postPayload.content = this.addPostForm.get('value').value;
    this.postPayload.title = this.addPostForm.get('title').value;
    this.addpostService.addPost(this.postPayload).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    });
  }

}
