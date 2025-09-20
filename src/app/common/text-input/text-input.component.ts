import { Component, input, model } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: "top4eu-text-input",
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: "./text-input.component.html",
    styleUrl: "./text-input.component.scss",
})
export class TextInputComponent {
    // input properties
    public readonly text = model<string>();
    public readonly formControl = model.required<FormControl<string | null>>();
    public readonly placeholder = input<string>();
    public readonly readonly = input<boolean>(false);
    public readonly title = input<string>("");
    public readonly pattern = input<RegExp | string>();

    constructor() {}
}
