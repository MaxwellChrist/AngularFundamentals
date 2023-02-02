import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-bold is-fullheight">
      <div class="hero-body">
        <p class="title">
          My Home Page
        </p>
      </div>
    </section>
  `,
  styles: [`
    .hero 
      background-image: url('/assets/images/Lion.png')
      background-position: center center
      background-size: cover
  `]
})
export class HomeComponent {

}
