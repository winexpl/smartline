import { Component, signal } from "@angular/core";

@Component({
    selector: "app-smart-line",
    imports: [],
    templateUrl: "./smart-line.component.html",
    styleUrl: "./smart-line.component.scss",
})
export class SmartLineComponent {
    public searchString = signal("");
}
