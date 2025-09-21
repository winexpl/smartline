import { ChangeDetectorRef, Component, inject, input, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SMART_LINE_STRINGS } from "./smart-line.strings";
import { MatIcon } from "@angular/material/icon";

import { TagComponent } from "../tag/tag.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: "top4eu-smart-line",
    imports: [TagComponent, CommonModule, FormsModule, MatIcon],
    templateUrl: "./smart-line.component.html",
    styleUrl: "./smart-line.component.scss",
})
export class SmartLineComponent {
    strings = SMART_LINE_STRINGS;

    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    public readonly tags = input<string[]>([]);
    public enterPressed = output<string>();

    private searchStringInternal = "";

    public set searchString(input: string) {
        this.searchStringInternal = input;
    }
    public get searchString(): string {
        return this.searchStringInternal;
    }

    public onEnterPressed(): void {
        this.enterPressed.emit(this.searchStringInternal);
    }

    public onTagClicked(tegText: string): void {
        this.searchString = tegText;
        this.changeDetectorRef.markForCheck();
    }
}
