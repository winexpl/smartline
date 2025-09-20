import { Component, input, output } from '@angular/core';

@Component({
  selector: 'top4eu-tag',
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {
    public readonly tagText = input<string>();
    public readonly tagClicked = output<string>();

    public onTagClicked(): void {
        
    }
}
