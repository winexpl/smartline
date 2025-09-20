import { Component, DestroyRef, inject, input, output } from "@angular/core";
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { SliceDate, ValidityFormEvent } from "../validity-form-event";

@Component({
    selector: "top4eu-date-range-control-input",
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: "./date-range-control-input.component.html",
    styleUrls: ["./date-range-control-input.component.scss"],
})
export class DateRangeControlInputComponent {
    private readonly fb = inject(FormBuilder);
    private readonly destroyRef = inject(DestroyRef);

    public readonly startDateControl = this.fb.control("", Validators.required);
    public readonly endDateControl = this.fb.control("", Validators.required);
    public readonly dateRangeForm = this.fb.group({
        startDate: this.startDateControl,
        endDate: this.endDateControl,
    });

    public readonly readonly = input<boolean>(false);
    public readonly validityChanged = output<ValidityFormEvent<SliceDate>>();

    constructor() {
        this.dateRangeForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
            this.validityChanged.emit({
                isValid: this.dateRangeForm.valid,
                value: {
                    startDate: this.startDateControl.value!,
                    endDate: this.endDateControl.value!,
                } as SliceDate,
            });
        });
    }
}
