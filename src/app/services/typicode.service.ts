import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {

  url = environment.url;


  constructor(private httpClient: HttpClient) { }

  getallusers(): Observable<any>{
    return this.httpClient.get<any>(this.url + '/users');
  }

  getCommentByPost(id: number): Observable<any>{
    return this.httpClient.get<any>(this.url + '/posts/' + id + '/comments')
  }

  getPhotosByAlbum(id: number): Observable<any>{
    return this.httpClient.get<any>(this.url + '/albums/' + id + '/photos')
  }

  getPostsByUser(id: number): Observable<any>{
    return this.httpClient.get<any>(this.url + '/users/' + id + '/posts')
  }

  getAlbumsByUser(id: number): Observable<any>{
    return this.httpClient.get<any>(this.url + '/users/' + id + '/albums')
  }

}
