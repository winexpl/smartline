import { Component, input } from '@angular/core';

@Component({
  selector: 'top4eu-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
    public readonly label = input.required<string>();
    public readonly rows = input.required<Row[]>();
}


export interface Row {
    key: string;
    value: string;
}