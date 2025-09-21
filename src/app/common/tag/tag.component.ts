import { Component, input, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'top4eu-tag',
  imports: [MatIcon],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {
    public readonly tagText = input<string>();
    public readonly tagClicked = output<string>();

    public onTagClicked(): void {
        this.tagClicked.emit(this.tagText()!);
    }
}
