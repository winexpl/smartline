import { Component, input, output } from "@angular/core";
import { MatIcon } from "@angular/material/icon";

@Component({
    selector: "top4eu-list",
    imports: [MatIcon],
    templateUrl: "./list.component.html",
    styleUrl: "./list.component.scss",
})
export class ListComponent {
    public articles = input<Article[]>([]);
    public label = input<string>("");

    public canceled = output<void>();

    public cancel(): void {
        this.canceled.emit();
    }
}

export interface Article {
    id: string;
    title: string;
    url: string;
}
