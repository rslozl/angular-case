import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../controller/user.service";
import {UserModel} from "../../models/user";
import {PostModel} from "../../models/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  userId: Number = 0;
  user: UserModel = new UserModel();
  posts: PostModel[] = [];

  constructor(private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(x => {
      this.userId = x['userId'];
      this.userService.getUser(this.userId).subscribe(response => {
        this.user = response.data as UserModel
      });
      this.userService.getUserPosts(this.userId).subscribe(posts => {
        this.posts=posts;
      })
    });
  }

}
