import { Component, DestroyRef, inject, input, output } from "@angular/core";
import { StorageService } from "../storage.service";
import { TextInputComponent } from "../text-input/text-input.component";
import { INN_CONTROL_INPUT_STRINGS } from "./inn-control-input.strings";
import { FormBuilder, Validators } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
    selector: "top4eu-inn-control-input",
    imports: [TextInputComponent],
    templateUrl: "./inn-control-input.component.html",
    styleUrl: "./inn-control-input.component.scss",
})
export class InnControlInputComponent {
    strings = INN_CONTROL_INPUT_STRINGS;

    public readonly readonly = input<boolean>(false);
    public readonly validityChanged = output<{ isValid: boolean, inn: string }>();

    private readonly storageService = inject(StorageService);
    private readonly fb = inject(FormBuilder);
    private readonly destroyRef = inject(DestroyRef);

    public readonly placeholder = this.strings.INPUT_INN;
    public readonly title = this.strings.INN;

    public readonly innControl = this.fb.control(this.loadInn(), [
        Validators.required,
        Validators.pattern(/^\d{10,12}$/),
    ]);

    constructor() {
        this.innControl.statusChanges
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() =>
                this.validityChanged.emit({
                    isValid: this.innControl.valid,
                    inn: this.innControl.value!,
                })
            );
    }

    private loadInn(): string {
        return this.storageService.inn ?? "";
    }
}
