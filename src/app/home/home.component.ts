import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">Gold Standard Gaming</h1>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero 
      background-image: url('/assets/images/Lion.png')
      background-position: center center
      background-size: cover

    .title
      color: white
      text-shadow: 1.5px 1.5px black
      padding-top: 3rem

  `]
})
export class HomeComponent {

}
