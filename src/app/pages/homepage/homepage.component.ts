import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import HeroComponent from '../../components/hero/hero.component';

@Component({
  selector: 'app-homepage',
  imports: [ButtonModule, HeroComponent, UpperCasePipe, TitleCasePipe, CardModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  responsiveOptions: any[] = [
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
    },
];

popular = [
  {
    id: 1,
    destination: 'greece',
    price: 1200,
    days: 7,
    image: 'https://www.greek-cruises.com/images/cruises/index/7-day-mediterranean-cruise.jpg',
  },
  {
    id: 2,
    destination: 'china',
    price: 7000,
    days: 9,
    image: 'https://th.bing.com/th/id/R.821020cc73689bcf7075e314ca39cf6e?rik=lDcpVYvtoyqa8A&riu=http%3a%2f%2fwww.qantas.com%2fcontent%2ftravelinsider%2fen%2fexplore%2fasia%2fchina%2fbeijing%2fone-perfect-day-in-beijing%2f_jcr_content%2fparsysTop%2fhero.img.full.medium.jpg%2f1532400471603.jpg&ehk=aMuzmRzjWNzwciEuXMbJuOLX8D7HJUokm0H7d0ZRetw%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    id: 3,
    destination: 'bali',
    price: 2200,
    days: 3,
    image: 'https://th.bing.com/th/id/OIP.VcA1_3qqToZcJBAryIRCqgHaE3?rs=1&pid=ImgDetMain',
  },
  {
    id: 3,
    destination: 'bali',
    price: 2200,
    days: 3,
    image: 'https://th.bing.com/th/id/OIP.VcA1_3qqToZcJBAryIRCqgHaE3?rs=1&pid=ImgDetMain',
  },
]
bestSeller = [
  {
    id: 1,
    destination: 'greece',
    price: 1200,
    days: 7,
    image: 'https://www.greek-cruises.com/images/cruises/index/7-day-mediterranean-cruise.jpg',
  },
  {
    id: 2,
    destination: 'china',
    price: 7000,
    days: 9,
    image: 'https://th.bing.com/th/id/R.821020cc73689bcf7075e314ca39cf6e?rik=lDcpVYvtoyqa8A&riu=http%3a%2f%2fwww.qantas.com%2fcontent%2ftravelinsider%2fen%2fexplore%2fasia%2fchina%2fbeijing%2fone-perfect-day-in-beijing%2f_jcr_content%2fparsysTop%2fhero.img.full.medium.jpg%2f1532400471603.jpg&ehk=aMuzmRzjWNzwciEuXMbJuOLX8D7HJUokm0H7d0ZRetw%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    id: 3,
    destination: 'bali',
    price: 2200,
    days: 3,
    image: 'https://th.bing.com/th/id/OIP.VcA1_3qqToZcJBAryIRCqgHaE3?rs=1&pid=ImgDetMain',
  },
  {
    id: 3,
    destination: 'bali',
    price: 2200,
    days: 3,
    image: 'https://th.bing.com/th/id/OIP.VcA1_3qqToZcJBAryIRCqgHaE3?rs=1&pid=ImgDetMain',
  },
]
nature = [
  {
    id: 1,
    destination: 'phucket',
    price: 1200,
    days: 7,
    image: 'https://th.bing.com/th/id/OIP.yKaCjF2roAOXkaovQHMmcgHaFn?rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    destination: 'arizona',
    price: 7000,
    days: 9,
    image: 'https://th.bing.com/th/id/R.216682f46ecaa0af04e6d041ae50865b?rik=S5mIp6Hcgb3LsA&pid=ImgRaw&r=0',
  },
  {
    id: 3,
    destination: 'hawaii',
    price: 2200,
    days: 3,
    image: 'https://th.bing.com/th/id/R.04d3b6d041e9a4f3edf60fd46b0fab0a?rik=kRJaqknOnRkgww&pid=ImgRaw&r=0',
  },
  {
    id: 3,
    destination: 'norway',
    price: 2200,
    days: 3,
    image: 'https://th.bing.com/th/id/OIP.-sp1A6vII9kZR9jZzy2URQHaDZ?rs=1&pid=ImgDetMain',
  },
]
city = [
  {
    id: 1,
    destination: 'paris',
    price: 1500,
    days: 5,
    image: 'https://th.bing.com/th/id/R.4ce31a2a3657f3a9ac6e9a2f3c6c52c4?rik=hFr2Y43I3eqhQw&pid=ImgRaw&r=0',
  },
  {
    id: 2,
    destination: 'tokyo',
    price: 1800,
    days: 7,
    image: 'https://www.tokyoweekender.com/wp-content/uploads/2022/06/shutterstock_1830039815.jpg',
  },
  {
    id: 3,
    destination: 'new york',
    price: 1600,
    days: 6,
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/29/11/istock-623595614.jpg',
  },
  {
    id: 4,
    destination: 'barcelona',
    price: 1400,
    days: 5,
    image: 'https://hertravelnotes.com/wp-content/uploads/2023/06/barcelona-00117-768x960.jpg',
  },
]
popularDestinations = [
  {
    country: 'thailand',
    listingCount: 210,
    image: 'https://i.pinimg.com/736x/a6/df/03/a6df033bc15ef7f23a44172951ab8d38.jpg',
  },
  {
    country: 'canada',
    listingCount: 148,
    image: 'https://i.pinimg.com/736x/1c/5e/ed/1c5eed554843151294c65d706cf9c2f7.jpg',
  },
  {
    country: 'france',
    listingCount: 342,
    image: 'https://i.pinimg.com/736x/37/cf/e0/37cfe0535015dd24448115c7e80d1ec3.jpg',
  },
  {
    country: 'singapore',
    listingCount: 210,
    image: 'https://i.pinimg.com/736x/4b/0c/c3/4b0cc3bd13f77207ba87a701715c6b43.jpg',
  },
  {
    country: 'canada',
    listingCount: 148,
    image: 'https://i.pinimg.com/736x/87/b3/9f/87b39f60a2864bd91194d9fbb598635f.jpg',
  },
  {
    country: 'italy',
    listingCount: 342,
    image: 'https://i.pinimg.com/736x/96/a1/ca/96a1ca31fdec6b9bf82e1b716ef41084.jpg',
  },
  {
    country: 'canada',
    listingCount: 148,
    image: 'https://i.pinimg.com/736x/87/b3/9f/87b39f60a2864bd91194d9fbb598635f.jpg',
  },
  {
    country: 'italy',
    listingCount: 342,
    image: 'https://i.pinimg.com/736x/96/a1/ca/96a1ca31fdec6b9bf82e1b716ef41084.jpg',
  },
]

listOptions = [
  {
    listName: 'popular listings',
    data: this.popular,
  },
  {
    listName: 'best sellers',
    data: this.bestSeller,
  },
  {
    listName: 'nature getaways',
    data: this.nature,
  },
  {
    listName: 'city explorations',
    data: this.city,
  },
]
featuredList = this.listOptions[0];

toggleFeaturedList(index: number) {
  this.featuredList = this.listOptions[index];
}

}
