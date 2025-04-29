import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'ratingPipe',
})
export class RatingPipe implements PipeTransform {
  transform(rating: number): string {
    switch (Math.floor(rating)) {
        case 1:
            return 'Lame';
        case 2:
            return 'It`s OK';
        case 3:
            return 'Good';
        case 4:
            return 'Great';
        case 5:
            return 'Excellent';
        default:
            return 'Be The First To Rate This Listing';
    }
  }
}