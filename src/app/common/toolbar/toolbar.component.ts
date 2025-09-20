import { Component, EventEmitter, inject, output, Output } from "@angular/core";
import { InnControlInputComponent } from "../inn-control-input/inn-control-input.component";
import { SmartLineComponent } from "../smart-line/smart-line.component";
import { TOOLBAR_STRINGS } from "./toolbar.strings";
import { StorageService } from "../storage.service";
import { Router } from "@angular/router";

@Component({
    selector: "top4eu-toolbar",
    imports: [SmartLineComponent, InnControlInputComponent],
    templateUrl: "./toolbar.component.html",
    styleUrl: "./toolbar.component.scss",
})
export class ToolbarComponent {
    strings = TOOLBAR_STRINGS;

    private readonly router = inject(Router);
    private readonly storageService = inject(StorageService);

    public componentSelected = output<string>();

    public logout(): void {
        this.storageService.removeInn();
        this.router.navigate(['/logon']);
    }

    public onSelectComponent(component: string): void {
        this.componentSelected.emit(component);
    }
}
