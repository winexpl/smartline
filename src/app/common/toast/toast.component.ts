import { Component } from "@angular/core";

@Component({
    selector: "top4eu-toast",
    templateUrl: "./toast.component.html",
    styleUrls: ["./toast.component.scss"],
})
export class ToastComponent {
    message = "";
    isVisible = false;

    showToast(message: string): void {
        this.message = message;
        this.isVisible = true;

        setTimeout(() => {
            this.isVisible = false;
        }, 3000);
    }
}
