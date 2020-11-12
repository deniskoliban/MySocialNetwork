import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(): void {

    this.http.post(
      'https://mysocialnetwork-ee2a9.firebaseio.com/post.json',
      {hello: 'hello'}).subscribe((response) => {
        console.log(response);
    });
  }

}
