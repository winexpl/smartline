import { Component, ViewChild, ViewContainerRef, Type, inject } from "@angular/core";
import { ToolbarComponent } from "../common/toolbar/toolbar.component";
import { ProfileSettingsComponent } from "../profile-settings/profile-settings.component";
import { QuoteSessionFormComponent } from "../quote-session-form/quote-session-form.component";
import { ToastsService } from "../common/toast.service";
import { ToastComponent } from "../common/toast/toast.component";

@Component({
    selector: "top4eu-main",
    imports: [ToolbarComponent, ToastComponent],
    templateUrl: "./main.component.html",
    styleUrl: "./main.component.scss",
})
export class MainComponent {
    private readonly toastsService = inject(ToastsService);

    @ViewChild("dynamicContainer", { read: ViewContainerRef, static: true })
    container!: ViewContainerRef;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private readonly componentMap: Record<string, Type<any>> = {
        profile: ProfileSettingsComponent,
        quote: QuoteSessionFormComponent,
    };

    public loadComponent(componentKey: string): void {
        const componentClass = this.componentMap[componentKey];
        if (!componentClass) {
            return;
        }
        this.container.clear();
        this.container.createComponent(componentClass);
    }

    public addToast(): void {
        this.toastsService.showWarning("This is a warning toast!");
    }
}
