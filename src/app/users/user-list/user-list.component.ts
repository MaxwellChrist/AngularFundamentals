import { Component, OnInit } from '@angular/core';
import { GithubUsersService } from '../github-users.service';

@Component({
  selector: 'app-user-list',
  template: `
  <section class="section">
    <div class="container">
      <div class="columns is-multiline" *ngIf="users">
        <div class="column is-one-quarter" *ngFor="let user of users | async">
          <div class="card">
            <div class="card-content" >
              <a class="title is-3" routerLink="/users/{{user.login}}">{{ user.login }}</a>
              <img class="image" src="{{user.avatar_url}}" />
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  `,
  styles: [`
    .image 
      width: 100%
      border-radius: 10px
      padding-top: 1.25rem

    .card-content
      text-align: center

    .card 
      background-color: black
      border-radius: 5px
    
    .title
      color: #eacc85
      text-shadow: 1.5px 1.5px #835721
      margin-bottom: 0.5rem
  `]
})
export class UserListComponent implements OnInit{
  constructor(private GithubUsersService: GithubUsersService)  {

  }

  users: any

  ngOnInit() {
    this.users = this.GithubUsersService.getAllUsers();
  }
}
