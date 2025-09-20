import { Component, inject, signal } from "@angular/core";
import { SMART_LINE_STRINGS } from "./smart-line.strings";
import { AssistentService } from "../../assistent/assistent.service";
import { TagComponent } from "../tag/tag.component";

@Component({
    selector: "top4eu-smart-line",
    imports: [TagComponent],
    templateUrl: "./smart-line.component.html",
    styleUrl: "./smart-line.component.scss",
})
export class SmartLineComponent {
    strings = SMART_LINE_STRINGS;

    private readonly assistentService = inject(AssistentService);
    public readonly tags = signal<string[]>([]);

    private searchStringInternal = "";

    public set searchString(input: string) {
        this.searchStringInternal = input;
    }
    public get searchString(): string {
        return this.searchStringInternal;
    }

    public onEnterPressed(): void {
        
    }    
}
