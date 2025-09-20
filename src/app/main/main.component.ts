import { Component } from "@angular/core";
import { ToolbarComponent } from "../common/toolbar/toolbar.component";
import { RouterOutlet } from "@angular/router";
import { ProfileSettingsComponent } from "../profile-settings/profile-settings.component";

@Component({
    selector: "top4eu-main",
    imports: [ToolbarComponent, RouterOutlet, ProfileSettingsComponent],
    templateUrl: "./main.component.html",
    styleUrl: "./main.component.scss",
})
export class MainComponent {}
