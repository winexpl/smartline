import { Component, ViewChild, ViewContainerRef, inject, signal } from "@angular/core";
import { ToolbarComponent } from "../common/toolbar/toolbar.component";
import { ToastsService } from "../common/toast.service";
import { ToastComponent } from "../common/toast/toast.component";
import {
    ComponentType,
    ModeProfileSettingsView,
    RegisterNestedComponentService,
} from "../ui-state/register-nested-component.service";

@Component({
    selector: "top4eu-main",
    imports: [ToolbarComponent, ToastComponent],
    templateUrl: "./main.component.html",
    styleUrl: "./main.component.scss",
})
export class MainComponent {
    private readonly toastsService = inject(ToastsService);
    private readonly registerNestedComponentService = inject(RegisterNestedComponentService);

    @ViewChild("dynamicContainer", { read: ViewContainerRef, static: true })
    dynamicContainer!: ViewContainerRef;

    private readonly profileSettingsOpenedInStrictMode = signal(false);

    @ViewChild("strictProfileSettingsContainer", { read: ViewContainerRef, static: true })
    strictProfileSettingsContainer!: ViewContainerRef;

    public addToast(): void {
        this.toastsService.showWarning("This is a warning toast!");
    }

    public loadComponent(component: {
        componentName: ComponentType;
        mode?: ModeProfileSettingsView;
    }): void {
        let container;
        switch (component.mode) {
            case ModeProfileSettingsView.SMART:
                container = this.dynamicContainer;
                break;
            case ModeProfileSettingsView.STRICT:
            default:
                container = this.strictProfileSettingsContainer;
                if (this.profileSettingsOpenedInStrictMode()) {
                    this.registerNestedComponentService.clearContainer(
                        this.strictProfileSettingsContainer
                    );
                } else {
                    this.registerNestedComponentService.loadComponent(
                        container,
                        component.componentName
                    );
                }
                this.switchProfileSettingsView();
                break;
        }
    }

    public switchProfileSettingsView(): void {
        this.profileSettingsOpenedInStrictMode.set(!this.profileSettingsOpenedInStrictMode());
    }
}
