import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubUsersService } from '../github-users.service';

@Component({
  selector: 'app-user-single',
  template: `
    <section class="section">
      <div class="container">
        <div class="card" *ngIf="currentUser">
          <h1 class="title">{{ currentUser.login }}</h1>
          <img class="image" src="{{ currentUser.avatar_url }}" />
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class UserSingleComponent implements OnInit{
  constructor(private GithubUsersService: GithubUsersService, private route: ActivatedRoute) {}
  currentUser: any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      const username = params['username'];
      this.GithubUsersService.getSingleUser(username).subscribe(item => this.currentUser = item);
    })
  }
}
