import { Component } from "@angular/core";
import { ToastComponent } from "./common/toast/toast.component";
import { SmartLineComponent } from "./common/smart-line/smart-line.component";

@Component({
    selector: "top4eu-root",
    imports: [ToastComponent, SmartLineComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    title = "smartline";
}
