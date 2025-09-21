import { Component, effect, input, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'top4eu-form',
  imports: [MatIcon],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
    public readonly label = input.required<string>();
    public readonly rows = input.required<Row[]>();

    public canceled = output<void>();

    constructor() {
        effect(() =>
        console.log(this.rows()));
        
    }

    public cancel(): void {
        this.canceled.emit();
    }
}


export interface Row {
    key: string;
    value: string;
}
