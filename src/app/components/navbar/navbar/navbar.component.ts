import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  imports: [ButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isHomepage = false;
  user: any;


ngOnInit(): void {
  // let test = document.getElementById
  // this.getUser;
}

getUser() {
  this.user = {
    name: 'Kylie',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQH1o4Avl01RCA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698873322772?e=2147483647&v=beta&t=4lwjMLSYjyH9c528Y9FQZXn_tqii1bFYpjSJ2v3VOX4',
    reviews: 3289,
    rating: 4.59,
    joined: new Date(),
    title: 'Solo Travel Enthusiast',
    about: 'My listings are mainly full of solor travel plans that allow other women of color to travel comfortably and affordbly to places outside of the U.S.',
  }
}
}
