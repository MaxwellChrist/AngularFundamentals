import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="navbar is-link">
    <div class="navbar-brand">
      <a class="navbar-item">
        Logo
      </a>
    </div>
  </div>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }
}
