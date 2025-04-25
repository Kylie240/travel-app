import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-explore-page',
  imports: [TitleCasePipe, ButtonModule],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.scss'
})
export class ExplorePageComponent {
  listings = [
    {
      id: 1,
      categories: ['best seller', 'top rated', 'budget friendly'],
      countries: ['greece'],
      cities: ['athens'],
      title: 'iceland northern lights escape',
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
      price: 2200,
      days: 12,
      people: [4, 6],
      views: 5,
      rating: 5.0,
      reviews: 1,
      image: 'https://th.bing.com/th/id/OIP.kB7bCIZXzygI6cWIb1bWKgHaFE?rs=1&pid=ImgDetMain',
    },
  ]
}
