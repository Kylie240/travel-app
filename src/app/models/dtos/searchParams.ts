import { DropdownOption } from "./DropdownOption";

export class searchParams {
    destination: string;
    days: DropdownOption;
    minPrice: number;
    maxPrice: number;

    constructor(destination: string, days: DropdownOption, minPrice: number, maxPrice: number){
        this.destination = destination;
        this.days = days;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
    }
}