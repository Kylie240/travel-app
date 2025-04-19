import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HeroComponent } from '../../components/hero/hero.component';
import { CarouselModule } from 'primeng/carousel';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [ButtonModule, HeroComponent, CarouselModule, UpperCasePipe, TitleCasePipe],
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

listOptions = [
  {
    listName: 'popular',
    data: this.popular,
  },
  {
    listName: 'best seller',
    data: this.bestSeller,
  },
  {
    listName: 'nature',
    data: this.nature,
  },
  {
    listName: 'city',
    data: this.city,
  },
]
featuredList = this.listOptions[0];

toggleFeaturedList(index: number) {
  this.featuredList = this.listOptions[index];
}

}
