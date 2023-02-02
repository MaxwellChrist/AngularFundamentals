import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="assets/images/GoldStandard.png" class="image"/>
      </a>
    </div>
  </div>
  `,
  styles: [`
    .navbar 
      background-color: #EAE9E0

    .navbar-item 
      padding: 0 0 0 0.75rem
    
`]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }
}
