import { Component, OnInit, OnDestroy, inject } from "@angular/core";
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

    private toastsService = inject(ToastsService);

    ngOnInit(): void {
        this.subscription = this.toastsService.toasts$.subscribe((toast) => {
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
}
