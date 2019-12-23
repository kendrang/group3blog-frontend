import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PostPayload} from './post-payload';
import {AddPostService} from '../add-post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

<<<<<<< HEAD
  addPostForm: FormGroup;
  postPayload: PostPayload;
  title = new FormControl('');
  body = new FormControl('');
=======
addPostForm: FormGroup;
postPayload: PostPayload;
title = new FormControl('');
body = new FormControl('');
>>>>>>> f66112250547023d95fef83cd40c85c8b583d307

  constructor(private addpostService: AddPostService, private router: Router) {
    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body
    });
    this.postPayload = {
<<<<<<< HEAD
      postid: '',
      content: '',
=======
>>>>>>> f66112250547023d95fef83cd40c85c8b583d307
      title: '',
      content: '',
      username: ''
<<<<<<< HEAD
    }
  }
=======
    };
   }
>>>>>>> f66112250547023d95fef83cd40c85c8b583d307

  ngOnInit() {
  }

  addPost() {
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postPayload.title = this.addPostForm.get('title').value;
    this.addpostService.addPost(this.postPayload).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    });
  }
}