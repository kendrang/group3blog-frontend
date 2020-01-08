import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentPayload} from './add-comment/comment-payload';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCommentService {

  constructor(private httpClient: HttpClient){

  }

  addComment(commentPayLoad: CommentPayload){
    return this.httpClient.post('http://localhost:8080/api/comments', commentPayLoad);
  }

  getAllComments(postId: number): Observable<Array<CommentPayload>> {
    return this.httpClient.get<Array<CommentPayload>>('http://localhost:8080/api/comments/post/' + postId);
  }

  getComment(permaLink: number): Observable<CommentPayload> {
    return this.httpClient.get<CommentPayload>('http://localhost:8080//api/comments/get/' + permaLink);
  }
}
