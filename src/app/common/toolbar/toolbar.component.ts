import { Component, inject, output } from "@angular/core";
import { SmartLineComponent } from "../smart-line/smart-line.component";
import { TOOLBAR_STRINGS } from "./toolbar.strings";
import { StorageService } from "../storage.service";
import { Router } from "@angular/router";
import { ComponentType, ModeProfileSettingsView } from "../../ui-state/register-nested-component.service";

@Component({
    selector: "top4eu-toolbar",
    imports: [SmartLineComponent],
    templateUrl: "./toolbar.component.html",
    styleUrl: "./toolbar.component.scss",
})
export class ToolbarComponent {
    strings = TOOLBAR_STRINGS;

    private readonly router = inject(Router);
    private readonly storageService = inject(StorageService);

    public profileSettings(): void {
        this.componentSelected.emit({
            componentName: ComponentType.PROFILE_SETTINGS,
            mode: ModeProfileSettingsView.STRICT,
        });
    }

    public readonly componentSelected = output<{
        componentName: ComponentType;
        mode?: ModeProfileSettingsView;
    }>();

    public logout(): void {
        this.storageService.inn = null;
        this.router.navigate(["/logon"]);
    }
}
