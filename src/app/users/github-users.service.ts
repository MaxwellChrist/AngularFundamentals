import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {
  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(`${this.apiUrl}?per_page=20`)
    .subscribe(data => console.log(data));
  };
  

  getSingleUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`)
    .subscribe(data => console.log(data));
  };
}
