export class DropdownOption {
    label: string;
    value: string;
    items?: any[];

    constructor(label: string = '', value: string = '', items: any[] = []) {
        this.label = label;
        this.value = value;
        this.items = items;
    }
}