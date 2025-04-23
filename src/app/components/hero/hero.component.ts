import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-hero',
  imports: [CardModule, ButtonModule, FormsModule, AutoCompleteModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  destinations: string[] = ['rome', 'italy', 'spain', 'greece', 'chine', 'japan', 'thailand'];
  days: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  searchParams = {
    destination: '',
    days: '',
    minPrice: '',
    maxPrice: '',
  }
  minMax = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  editDestination: boolean = false;
  editDays: boolean = false;
  editMinMax: boolean = false;

  searchDestinations(event: AutoCompleteCompleteEvent) {
    let _items = [...Array(10).keys()];

    this.destinations = this.destinations;
  }

  search(event: AutoCompleteCompleteEvent) {
    let _items = [...Array(3).keys()];

    this.minMax = _items;
    }
}
