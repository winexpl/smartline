import { Component, input, output } from "@angular/core";

@Component({
    selector: "top4eu-profile-update-line",
    imports: [],
    templateUrl: "./profile-update-line.component.html",
    styleUrl: "./profile-update-line.component.scss",
})
export class ProfileUpdateLineComponent {
    public readonly profileData = input<{ key: string; value: string }>({ key: "", value: "" });

    public canceled = output<void>();

    public cancel(): void {
        this.canceled.emit();
    }
}
