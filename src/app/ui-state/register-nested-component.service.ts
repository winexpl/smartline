import { Injectable, Type, ViewContainerRef } from "@angular/core";
import { ProfileSettingsComponent } from "../profile-settings/profile-settings.component";
import { QuoteSessionFormComponent } from "../quote-session-form/quote-session-form.component";

@Injectable({
    providedIn: "root",
})
export class RegisterNestedComponentService {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private readonly componentMap: Record<string, Type<any>> = {
        profile: ProfileSettingsComponent,
        quote: QuoteSessionFormComponent,
    };

    public loadComponent(container: ViewContainerRef, componentKey: ComponentType): void {
        container.clear();
        if (!componentKey) {
            return;
        }
        const componentClass = this.componentMap[componentKey];
        container.createComponent(componentClass);
    }

    public clearContainer(container: ViewContainerRef): void {
        container.clear();
    }
}

export enum ModeProfileSettingsView {
    SMART, STRICT 
}

export enum ComponentType {
    PROFILE_SETTINGS = "profile",
    QUOTE_SESSION_FORM = "quote"
}