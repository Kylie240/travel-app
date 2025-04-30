import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PopoverModule } from 'primeng/popover';
import { ListboxModule } from 'primeng/listbox';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-listing-header',
  imports: [CardModule, ButtonModule, FormsModule, AutoCompleteModule, PopoverModule, TitleCasePipe, ListboxModule, ReactiveFormsModule],
  templateUrl: './listing-header.component.html',
  styleUrl: './listing-header.component.scss'
})
export default class ListingHeaderComponent {
  @Input({required: true}) mainImage: string;
  @Input({required: true}) title: string;
  @Input({required: true}) secondImage: string;
  @Input({required: true}) overview: string;
}
