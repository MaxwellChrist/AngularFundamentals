import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <section class="hero is-small is-black">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Contact Us</h1>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <form (ngSubmit)="submitForm()" #contactForm="ngForm">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input type="text" name="name" class="input" [(ngModel)]="name" #nameInput="ngModel" required>
          </div>
          <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">Your name is required</div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input type="email" name="email" class="input" [(ngModel)]="email" #emailInput="ngModel" required>
          </div>
          <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">Your email is required and needs to be a valid email</div>
        </div>
        <div class="field">
          <label class="label">Message</label>
          <textarea name="message" [(ngModel)]="message"></textarea>
        </div>
        <button type="submit" class="button is-large is-success" [disabled]="contactForm.invalid">Send</button>
      </form>
    </div>
  </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  name: any;
  email: any;
  message: any;
  constructor() { }

  ngOnInit(): void {

  }

  submitForm() {
    const message = `My name is ${this.name} and my email is ${this.email}. My Message is this: ${this.message}`;
    alert(message);
  }
}
