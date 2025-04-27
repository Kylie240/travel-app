import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-explore-page',
  imports: [TitleCasePipe, ButtonModule, AutoCompleteModule, DialogModule, InputTextModule],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.scss'
})
export class ExplorePageComponent {
  visible: boolean = false;
  listings = [
    {
      id: 1,
      categories: ['best seller', 'top rated', 'budget friendly'],
      countries: ['greece'],
      cities: ['athens', 'santorini'],
      title: 'iceland northern lights escape',
      descrption: 'Discover the magic of Greece with my handcrafted travel itinerary covering the best of Athens and Santorini! From exploring ancient ruins and lively neighborhoods in Athens to soaking up breathtaking sunsets and hidden gems in Santorini, this guide is packed with must-see spots, local favorites, and insider tips. Whether you`re a first-time visitor or looking for a fresh adventure, this itinerary will help you experience the beauty, history, and vibrant culture of Greece with ease and excitement.',
      tags: ['baecation', 'culture', 'ancient history', 'spring', 'europe'],
      price: 1200,
      days: 7,
      people: [4, 6],
      views: 117,
      rating: 4.96,
      reviews: 4,
      image: 'https://www.magnificentworld.com/wp-content/uploads/2020/05/Northern-Lights-Iceland-6-823x1024.jpg',
    },
    {
      id: 2,
      categories: [],
      countries: ['egypt'],
      cities: ['luxor', 'alexandria', 'cairo'],
      title: 'da nile is a river in egypt',
      descrption: 'From exploring the ancient wonders of the Pyramids and the Sphinx to cruising along the Nile River and uncovering hidden gems in bustling markets, this itinerary offers a perfect balance of adventure, culture, and relaxation. Whether it`s your first time or a return visit, every detail is designed to make your journey unforgettable.',
      tags: ['baecation', 'culture', 'ancient history', 'spring', 'europe'],
      price: 4300,
      days: 9,
      people: [4, 6],
      views: 1324,
      rating: 3.82,
      reviews: 200,
      image: 'https://static.wixstatic.com/media/5eff48_155847bba39746f6a8857cfe1c3d00f3~mv2_d_3421_2290_s_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg',
    },{
      id: 3,
      categories: ['budget friendly'],
      countries: ['indonesia'],
      cities: ['bali', 'another'],
      title: 'you better bali-eve it',
      tags: ['baecation', 'culture', 'ancient history', 'spring', 'europe'],
      descrption: 'Whether you`re seeking adventure, relaxation, or a bit of both, this guide offers the perfect balance to make your trip amazing.',
      price: 2200,
      days: 12,
      people: [4, 6],
      views: 5,
      rating: 5.0,
      reviews: 1,
      image: 'https://th.bing.com/th/id/OIP.kB7bCIZXzygI6cWIb1bWKgHaFE?rs=1&pid=ImgDetMain',
    },{
      id: 3,
      categories: ['budget friendly'],
      countries: ['indonesia', 'singapore'],
      cities: ['bali', 'another'],
      title: 'you better bali-eve it',
      descrption: 'Let Bali’s beauty unfold effortlessly with every step you take!',
      tags: ['baecation', 'culture', 'ancient history', 'spring', 'europe'],
      price: 2200,
      days: 12,
      people: [4, 6],
      views: 5,
      rating: 5.0,
      reviews: 1,
      image: 'https://th.bing.com/th/id/OIP.kB7bCIZXzygI6cWIb1bWKgHaFE?rs=1&pid=ImgDetMain',
    },
  ]
  filters = [
    {
      icon: 'fa-solid fa-umbrella-beach',
      name: 'Beach',
    },
    {
      icon: 'fa-solid fa-person',
      name: 'Solo',
    },
    {
      icon: 'fa-solid fa-person-hiking',
      name: 'Adventure',
    },
    {
      icon: 'fa-solid fa-car',
      name: 'Road Trip',
    },
    {
      icon: 'fa-solid fa-spa',
      name: 'Relaxing',
    },
    {
      icon: 'fa-solid fa-arrow-trend-up',
      name: 'Popular',
    },
    {
      icon: 'fa-solid fa-archway',
      name: 'Site Seeing',
    },
    {
      icon: 'fa-solid fa-car',
      name: 'Road Trip',
    },
    {
      icon: 'fa-solid fa-person-walking-luggage',
      name: 'Business',
    },
    {
      icon: 'fa-solid fa-mountain-city',
      name: 'All Terrain',
    },
    {
      icon: 'fa-solid fa-earth-europe',
      name: 'Europe',
    },
    {
      icon: 'fa-solid fa-van-shuttle',
      name: 'Family Friendly',
    },
    {
      icon: 'fa-solid fa-utensils',
      name: 'Foodie',
    },
    {
      icon: 'fa-solid fa-plane',
      name: 'Long Haul',
    },
    {
      icon: 'fa-solid fa-earth-americas',
      name: 'Americas',
    },
    {
      icon: 'fa-solid fa-mountain-sun',
      name: 'Mountains',
    },
  ]

  constructor(
    private router: Router,
  )
  {}

  calculateNightlyPrice(listing: any) {
    return Math.floor(listing.price / listing.days);
  }

  showDialog() {
    this.visible = true;
}
  navigateToListing(listing: any) {
    this.router.navigate(['/listing'])
  }
}
