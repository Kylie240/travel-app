import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-listing',
  imports: [
    DatePipe
  ],
  templateUrl: './create-listing.component.html',
  styleUrl: './create-listing.component.scss'
})
export class CreateListingComponent {
  user ={
    name: 'Kylie',
    email: 'olivkylie@gmail.com',
    phone: '9545945535',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQH1o4Avl01RCA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698873322772?e=2147483647&v=beta&t=4lwjMLSYjyH9c528Y9FQZXn_tqii1bFYpjSJ2v3VOX4',
    reviews: 3289,
    rating: 4.59,
    joined: new Date(),
    title: 'Solo Travel Enthusiast',
    about: 'My listings are mainly full of solor travel plans that allow other women of color to travel comfortably and affordbly to places outside of the U.S.',
    draftListings: [
      {
        date: new Date(),
      },
      {
        date: new Date(),
      },
    ],
    activeListings: [],
  };
}
