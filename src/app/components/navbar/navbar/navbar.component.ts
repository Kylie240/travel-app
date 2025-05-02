import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputOtpModule } from 'primeng/inputotp';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-navbar',
  imports: [
    ButtonModule, 
    RouterLink, 
    RouterLinkActive, 
    DialogModule,
    InputTextModule,
    FormsModule,
    FloatLabel,
    AutoCompleteModule,
    InputNumberModule,
    InputOtpModule,
    Menu,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isHomepage = false;
  items: any[] = [];
  menuItems: MenuItem[] = [];
  visible = false;
  value: any;
  showSignUp = false;
  showLogIn = false;
  showOTC = false;
  exceedsLoginAttempts = false;
  otcValue = 123456;
  otcUserInput: number;
  user: any;
  searchParams = {
    phone: '',
  }

ngOnInit(): void {
  this.menuItems = [
    {
        items: [
            { label: 'Messages'},
            { label: 'Trips'},
            { label: 'Wishlist'},
        ]
    },
    {
        items: [
            { label: 'Create Itenerary', routerLink: '/create-listing'},
            { label: 'Manage Listings'},
            { label: 'Account', routerLink: '/account'},
        ]
    },
    {
        items: [
            { label: 'Gift Cards'},
            { label: 'Help Center'},
            { label: 'Log Out'},
        ]
    }
];
  // let test = document.getElementById
  this.user ={
    name: 'Kylie',
    email: 'olivkylie@gmail.com',
    phone: '9545945535',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQH1o4Avl01RCA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698873322772?e=2147483647&v=beta&t=4lwjMLSYjyH9c528Y9FQZXn_tqii1bFYpjSJ2v3VOX4',
    reviews: 3289,
    rating: 4.59,
    joined: new Date(),
    title: 'Solo Travel Enthusiast',
    about: 'My listings are mainly full of solor travel plans that allow other women of color to travel comfortably and affordbly to places outside of the U.S.',
  };
}

  search(event: AutoCompleteCompleteEvent) {
  let _items = [...Array(10).keys()];

  this.items = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items;
  }

getUser() {
  this.user = {
    name: 'Kylie',
    email: 'olivkylie@gmail.com',
    phone: '9545945535',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQH1o4Avl01RCA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698873322772?e=2147483647&v=beta&t=4lwjMLSYjyH9c528Y9FQZXn_tqii1bFYpjSJ2v3VOX4',
    reviews: 3289,
    rating: 4.59,
    joined: new Date(),
    title: 'Solo Travel Enthusiast',
    about: 'My listings are mainly full of solor travel plans that allow other women of color to travel comfortably and affordbly to places outside of the U.S.',
  }
}

showAccountDialog(dialogType: string) {
  this.visible = true;
}

closeAccountDialog() {
  this.visible = false;
  this.user = null;
  this.showSignUp = false;
  this.showLogIn = false;
  this.showOTC = false;
  this.otcUserInput = 0;
}
}
