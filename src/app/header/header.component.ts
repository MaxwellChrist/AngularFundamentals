import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item"></a>
    </div>
  </div>
  `,
  styles: [`
    .navbar 
      background-color: #EAE9E0
      height: 100px

    .navbar-item 
      padding: 0
      margin: 0 0 0 1rem
      background: url('../../assets/images/GoldStandard.png') no-repeat center center
      background-size: cover
      width: 100px
    
`]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }
}
