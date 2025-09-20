import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
    selector: "top4eu-quote-session-form",
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: "./quote-session-form.component.html",
    styleUrls: ["./quote-session-form.component.scss"],
})
export class QuoteSessionFormComponent {
    private readonly fb = inject(FormBuilder);

    public readonly form: FormGroup = this.fb.group({
        name: ["", Validators.required],
        id: ["", Validators.required],
        amount: [null, [Validators.required, Validators.min(0)]],
        createdAt: ["", Validators.required],
        completedAt: [""],
        categoryFirstPositionSpecification: ["", Validators.required],
        customerName: ["", Validators.required],
        customerInn: ["", [Validators.required, Validators.pattern(/^\d{10,12}$/)]],
        vendorName: ["", Validators.required],
        vendorInn: ["", [Validators.required, Validators.pattern(/^\d{10,12}$/)]],
        foundation: ["", Validators.required],
    });

    public submitForm(): void {
        if (this.form.valid) {
            const quoteSession = this.form.value;
        } else {
        }
    }
}
