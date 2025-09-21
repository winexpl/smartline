import { Component, OnInit, OnDestroy, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastsService, Toast } from "../toast.service";
import { Subscription } from "rxjs";

@Component({
    selector: "top4eu-toast",
    imports: [CommonModule],
    templateUrl: "./toast.component.html",
    styleUrls: ["./toast.component.scss"],
})
export class ToastComponent implements OnInit, OnDestroy {
    toasts: Toast[] = [];
    private subscription!: Subscription;
    public type = signal<"success" | "error" | "warning">("success");

    private toastsService = inject(ToastsService);

    ngOnInit(): void {
        this.subscription = this.toastsService.toasts$.subscribe((toast) => {
            this.type.set(toast.type);
            this.toasts.push(toast);
            if (toast.duration) {
                setTimeout(() => this.removeToast(toast.id), toast.duration);
            }
        });
    }

    removeToast(id: number): void {
        this.toasts = this.toasts.filter((toast) => toast.id !== id);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    getCss(): string {
        switch (this.type()) {
            case "success":
                return "toast-container-success";
            case "error":
                return "toast-container-error";
            case "warning":
                return "toast-container-warning";
            default:
                return "";
        }
    }
}
