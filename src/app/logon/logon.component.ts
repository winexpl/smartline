import { Component, inject, signal } from "@angular/core";
import { InnControlInputComponent } from "../common/inn-control-input/inn-control-input.component";
import { LOGON_STRINGS } from "./logon.strings";
import { Router } from "@angular/router";
import { StorageService } from "../common/storage.service";
import { ValidityFormEvent } from "../common/validity-form-event";

@Component({
    selector: "top4eu-logon",
    imports: [InnControlInputComponent],
    templateUrl: "./logon.component.html",
    styleUrl: "./logon.component.scss",
})
export class LogonComponent {
    strings = LOGON_STRINGS;

    private readonly router = inject(Router);
    private readonly storageService = inject(StorageService);

    private isValid = false;
    private inn = "";

    public logon(): void {
        if (this.isValid) {
            this.storageService.inn = this.inn;
            this.router.navigate(["/"]);
        }
    }

    public onValidityChanges(form: ValidityFormEvent<string>): void {
        this.isValid = form.isValid;
        this.inn = form.value;
    }
}
