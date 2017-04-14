import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Post} from './../models/post';


@Injectable()
export class PostsService {

  constructor(private http:Http) { }
  
  getPosts():Promise<Post[]>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .toPromise()
      .then(response => response.json() as Post[])
      .catch(this.handleError);
  }
  
  private handleSuccess(response:any):Promise<any>{
    return Promise.resolve(response as Post[]);
  }
  
  private handleError(error:any):Promise<any>{
    return Promise.reject(error.message || error);
  }

}
