import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-listing-subcomponent',
  imports: [RatingModule, FormsModule],
  template: `
  <div class="flex align-items-start justify-content-start gap-3">
    @if(listArray) {
        @for (item of listArray; let i = $index; track $index) {
            <div class="flex flex-column align-items-center cursor-pointer" (click)="handleLink(item.link)">
                <div style="height: 26px">
                    @if(i === 0) {
                        <p class="text-xl text-gray-500">{{listArray.length > 1 ? pluralHeader : singularHeader}}</p>
                    }
                </div>
                <img style="width: 200px; height: 100px;" class="border-round-3xl" src="{{item.photo}}" alt="">
                <p>{{item.title}}</p>
                @if(item.rating){
                    <span class="bg-black-alpha-90 border-round-3xl px-2 absolute" style="top: 35px; left: 15px;">
                        <p-rating [(ngModel)]="item.rating" stars="5"/>
                    </span>
                }
            </div>
        }
    }
</div>
  `,
})
export class ListingSubcomponent {
    @Input({required: true}) listArray: any[];
    @Input() pluralHeader: string = '';
    @Input() singularHeader: string = '';
    @Input() header: string = '';

    handleLink(link: string) {
        window.open(link, '_blank');
      }
}
