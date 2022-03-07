import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ResponseModel} from "../models/response";
import {UserModel} from "../models/user";
import {Observable, Subject} from "rxjs";
import {PostModel} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }


  getUsers(params: string = ''): Observable<ResponseModel<UserModel>> {
    return this.http.get<ResponseModel<UserModel>>('https://gorest.co.in/public-api/users' + params);
  }

  getUser(id: Number): Observable<ResponseModel<UserModel>> {
    return this.http.get<ResponseModel<UserModel>>('https://gorest.co.in/public-api/users/' + id);
  }

  getUserPosts(userId: Number): Observable<PostModel[]> {
    let subject = new Subject<PostModel[]>();
    this.http.get<ResponseModel<PostModel>>('https://gorest.co.in/public-api/users/' + userId + '/posts').subscribe(response => {
      subject.next(response.data as PostModel[]);
    });
    return subject.asObservable();

  }

}
