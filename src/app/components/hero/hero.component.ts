import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { BreakpointObserver } from '@angular/cdk/layout'
import { takeWhile } from 'rxjs';

@Component({
  selector: 'app-hero',
  imports: [CardModule, ButtonModule, FormsModule, AutoCompleteModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  isAlive: boolean = true;
  isSmallDevice: boolean = false;
  isTablet: boolean = false;
  isSmallScreen: boolean = false;
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

  constructor (
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 600px)','(max-width: 1200px)'])
    .pipe(takeWhile(() => this.isAlive))
    .subscribe(() => {
      if (this.breakpointObserver.isMatched('(max-width: 600px)')) {
        this.isSmallDevice = true;
      }
      if (this.breakpointObserver.isMatched('(max-width: 1245px)')) {
        this.isTablet = true;
      }
      if (this.breakpointObserver.isMatched('(max-width: 1400px)')) {
        this.isSmallScreen = true;
      }
    });
    
  }

  searchDestinations(event: AutoCompleteCompleteEvent) {
    let _items = [...Array(10).keys()];

    this.destinations = this.destinations;
  }

  search(event: AutoCompleteCompleteEvent) {
    let _items = [...Array(3).keys()];

    this.minMax = _items;
    }
}
