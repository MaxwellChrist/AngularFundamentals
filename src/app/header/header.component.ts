import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="navbar">
    <div class="navbar-brand">
      <div class="navbar-item" id="logo"></div>
    </div>


    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item" routerLink="/" >Home</div>
        <div class="navbar-item" routerLink="/contact" >Contact</div>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .navbar 
      background-color: #EAE9E0
      height: 100px

    #logo
      padding: 0
      margin: 0 0 0 1rem
      background: url('../../assets/images/GoldStandard.png') no-repeat center center
      background-size: cover
      width: 100px

    .navbar-item:not(#logo)
      cursor: pointer
    
    
`]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }
}
