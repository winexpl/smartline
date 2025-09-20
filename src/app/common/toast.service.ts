import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export interface Toast {
    id: number;
    type: "success" | "error" | "warning";
    message: string;
    duration?: number;
}

@Injectable({ providedIn: "root" })
export class ToastsService {
    private toastsSubject = new Subject<Toast>();
    public toasts$ = this.toastsSubject.asObservable();
    private nextId = 0;

    showSuccess(message: string, duration = 3000): void {
        this.showToast({ type: "success", message, duration });
    }

    showError(message: string, duration = 5000): void {
        this.showToast({ type: "error", message, duration });
    }

    private showToast(toast: Omit<Toast, "id">): void {
        this.toastsSubject.next({ ...toast, id: this.nextId++ });
    }
}
