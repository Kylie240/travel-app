import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { BreakpointObserver } from '@angular/cdk/layout'
import { takeWhile } from 'rxjs';
import { PopoverModule } from 'primeng/popover';
import { ListboxModule } from 'primeng/listbox';
import { DropdownOption } from '../../models/dtos/DropdownOption';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  imports: [CardModule, ButtonModule, FormsModule, AutoCompleteModule, PopoverModule, ListboxModule, ReactiveFormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  isAlive: boolean = true;
  isSmallDevice: boolean = false;
  isTablet: boolean = false;
  isSmallScreen: boolean = false;
  filteredDestinationOptions: DropdownOption[] = [];
  destinations: DropdownOption[] = [
    {
      label: 'Germany',
      value: 'de',
      items: [
          { label: 'Berlin', value: 'Berlin' },
          { label: 'Frankfurt', value: 'Frankfurt' },
          { label: 'Hamburg', value: 'Hamburg' },
          { label: 'Munich', value: 'Munich' }
      ]
  },
  {
      label: 'USA',
      value: 'us',
      items: [
          { label: 'Chicago', value: 'Chicago' },
          { label: 'Los Angeles', value: 'Los Angeles' },
          { label: 'New York', value: 'New York' },
          { label: 'San Francisco', value: 'San Francisco' }
      ]
  },
  {
      label: 'Japan',
      value: 'jp',
      items: [
          { label: 'Kyoto', value: 'Kyoto' },
          { label: 'Osaka', value: 'Osaka' },
          { label: 'Tokyo', value: 'Tokyo' },
          { label: 'Yokohama', value: 'Yokohama' }
      ]
  }
  ];
  days: DropdownOption[] = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
    { label: '13', value: '13' },
    { label: '14+', value: '14+' },
  ];
  dayRanges: DropdownOption[] = [
    { label: 'Any Duration', value: '0' },
    { label: '1 Day', value: '1' },
    { label: '2 - 5 Days', value: '2' },
    { label: '6 - 9 Days', value: '3' },
    { label: '10 - 13 Days', value: '4' },
    { label: '14+ Days', value: '5' },
  ];
  searchParams = {
    destination: '',
    days: new DropdownOption(),
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
    this.filteredDestinationOptions = this.destinations;
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

  filterDestinations({query}: AutoCompleteCompleteEvent) {
      const search = query.toLowerCase();

      this.filteredDestinationOptions = this.destinations.filter((x) => (search === '' || x.label.toLowerCase().includes(search)));
      if (query.length > 0) {
        this.filteredDestinationOptions.push(new DropdownOption(query, query))
      }
    }

    test({query}: AutoCompleteCompleteEvent) {
      const search = query.toLowerCase();

      this.dayRanges = this.dayRanges.filter((x) => (search === '' || x.label.toLowerCase().includes(search)));
    }
}
