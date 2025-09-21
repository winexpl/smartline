import { Component, input, output } from '@angular/core';

@Component({
  selector: 'top4eu-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
    public readonly label = input.required<string>();
    public readonly rows = input.required<Row[]>();

    public canceled = output<void>();

    public cancel(): void {
        this.canceled.emit();
    }
}


export interface Row {
    key: string;
    value: string;
}
