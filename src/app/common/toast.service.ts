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

    public showSuccess(message: string, duration = 3000): void {
        this.showToast({ type: "success", message, duration });
    }

    public showError(message: string, duration = 5000): void {
        this.showToast({ type: "error", message, duration });
    }

    public showWarning(message: string, duration = 4000): void {
        this.showToast({ type: "warning", message, duration });
    }

    public clearToasts(): void {
        this.toastsSubject.complete();
        this.toastsSubject = new Subject<Toast>();
    }

    private showToast(toast: Omit<Toast, "id">): void {
        this.toastsSubject.next({ ...toast, id: this.nextId++ });
    }
}
