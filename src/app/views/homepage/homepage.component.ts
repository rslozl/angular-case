import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../controller/user.service";
import {UserModel} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  users: UserModel[] = [];
  currentPage:number=1;
  total:number=0;
  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
this.getUsers();

  }

  getUsers(page:number=1,nameFilter=''){
    this.userService.getUsers('?page='+page +(nameFilter==''?'':('&name='+nameFilter))).subscribe(response => {
      this.users = response.data as UserModel[];
      this.total=response.meta.pagination.total;
    });
  }

  viewPostsOfUser(user: UserModel) {
    this.router.navigateByUrl('/posts?userId=' + user.id).then();
  }

  onPageChange(page: number) {
    this.currentPage=page;
    this.getUsers(this.currentPage);

  }

  filterByName($event: any) {
    this.getUsers(0,$event.target.value);
    setTimeout(function(){
      window.location.reload();
    },8000);

  }
}
