import { Component } from "@angular/core";
import { ToolbarComponent } from "../common/toolbar/toolbar.component";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "top4eu-main",
    imports: [ToolbarComponent, RouterOutlet],
    templateUrl: "./main.component.html",
    styleUrl: "./main.component.scss",
})
export class MainComponent {}
