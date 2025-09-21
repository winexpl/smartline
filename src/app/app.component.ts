import { Component, computed, inject, signal } from "@angular/core";
import { ToastComponent } from "./common/toast/toast.component";
import { SmartLineComponent } from "./common/smart-line/smart-line.component";
import { AssistentService } from "./assistent/assistent.service";
import { FormComponent, Row } from "./form/form.component";
import { ACTION_TO_LABEL, ACTION_TYPE, INTENT, ParseResponse } from "./assistent/response";
import { FeedbackPanelComponent } from "./common/feedback-panel/feedback-panel.component";
import { Article, ListComponent } from "./list/list.component";
import { ProfileUpdateLineComponent } from "./profile-update-line/profile-update-line.component";
import { ToastsService } from "./common/toast.service";

@Component({
    selector: "top4eu-root",
    imports: [
    ToastComponent,
    SmartLineComponent,
    FormComponent,
    FeedbackPanelComponent,
    ListComponent,
    ProfileUpdateLineComponent
],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    title = "smartline";
    private assistentService = inject(AssistentService);
    private readonly toastService = inject(ToastsService);

    public readonly label = signal<string>("");
    public readonly rows = signal<Row[]>([]);
    public readonly tags = signal<string[]>([]);
    public readonly formVisible = signal<boolean>(false);
    public readonly articles = signal<Article[]>([]);
    public readonly articlesVisible = signal(false);
    public readonly profileData = signal<{ key: string; value: string }>({ key: "", value: "" });
    public readonly profileSettingsVisible = signal(false);

    public readonly hasPayload = computed(() => this.formVisible() || this.profileSettingsVisible() || this.articlesVisible());

    public readonly loading = signal<boolean>(false);

    public testTags(response: ParseResponse): ParseResponse {
        response.action_type = ACTION_TYPE.QUOTE_SESSION; // For testing
        response.tags = ["tag1", "tag2", "111111111111111111111111111111", "1"]; // For testing
        return response;
    }

    public testQuoteNoItems(response: ParseResponse): ParseResponse {
        response.action_type = ACTION_TYPE.QUOTE_SESSION; // For testing
        response.intent = INTENT.ACTION; // For testing
        return response;
    }

    public testQuote(response: ParseResponse): ParseResponse {
        response.action_type = ACTION_TYPE.QUOTE_SESSION; // For testing
        response.intent = INTENT.ACTION; // For testing
        response.rows = [
            { key: "Item 1", value: "2" },
            { key: "Item 2", value: " 1 " },
        ]; // For testing
        return response;
    }

    public testProfile(response: ParseResponse): ParseResponse {
        response.action_type = ACTION_TYPE.PROFILE_UPDATE; // For testing
        response.intent = INTENT.ACTION; // For testing
        if (response.routing) {
            response.routing!.profile_key = "name";
            response.routing!.profile_value = "John Doe";
        }
        return response;
    }

    private testArticles(response: ParseResponse): ParseResponse {
        response.action_type = ACTION_TYPE.OTHER; // For testing
        response.intent = INTENT.VIEW; // For testing
        response.articles = [
            { id: "1", title: "Article 1", url: "https://example.com/article1" },
            { id: "2", title: "Article 2", url: "https://example.com/article2" },
        ]; // For testing
        return response;
    }

    public onEnterPressed(input: string): void {
        console.log("Enter pressed with input:", input);
        this.assistentService.parse(input).subscribe({
            next: (response) => {
                console.log("Parsed response:", response);
                response = this.testProfile(response);
                this.formVisible.set(false);

                this.offAll();
                this.switchByIntent(response);
            },
            error: (error) => {
                console.error("Error occurred:", error);
                // error = this.testArticles(error);
                this.offAll();
                this.switchByIntent(error);
            },
        });
    }

    public offAll(): void {
        this.formVisible.set(false);
        this.articlesVisible.set(false);
        this.profileSettingsVisible.set(false);
        this.label.set("");
        this.rows.set([]);
        this.articles.set([]);
        this.profileData.set({ key: "", value: "" });
        this.tags.set([]);
    }

    private isTagsContained(response: ParseResponse): void {
        if (response.tags && response.tags.length > 0) {
            this.tags.set(response.tags);
        }
    }

    private switchByIntent(response: ParseResponse): any {
        switch (response.intent) {
            case INTENT.ACTION:
                return this.switchByActionType(response);
            case INTENT.HELP:
                return this.openArticles(response);
            case INTENT.UNKNOWN:
                this.toastService.showError("Не удалось распознать запрос. Попробуйте переформулировать.");
                return null;
            case INTENT.VIEW:
                this.switchByActionType(response);
                this.articles.set(response.articles || []);
                this.label.set("Результаты поиска по статьям");
                this.articlesVisible.set(true);
                return this.switchByActionType(response);
            default:
                return null;
        }
    }

    private switchByActionType(response: ParseResponse): void {
        const actionLabel = ACTION_TO_LABEL.get(response.action_type as unknown as string);

        switch (response.action_type) {
            case ACTION_TYPE.QUOTE_SESSION:
            case ACTION_TYPE.DIRECT_PURCHASE:
            case ACTION_TYPE.NEEDS_PROCUREMENT:
            case ACTION_TYPE.REPEAT:
                if (actionLabel) {
                    this.label.set(actionLabel);
                    this.rows.set(response.rows);
                    this.formVisible.set(true);
                } else {
                    console.warn("Unknown action type:", response.action_type);
                    this.label.set("");
                }
                if (response.rows && response.rows.length > 0) {
                    this.rows.set(response.rows);
                } else {
                    this.rows.set([]);
                }
                break;
            case ACTION_TYPE.PROFILE_UPDATE:
                if (actionLabel) {
                    this.label.set(actionLabel);
                } else {
                    console.warn("Unknown action type:", response.action_type);
                    this.label.set("");
                }                
                if (response.routing?.profile_key && response.routing?.profile_value) {
                    this.profileData.set({
                        key: response.routing.profile_key,
                        value: response.routing.profile_value,
                    });
                } else {
                    this.profileData.set({ key: "", value: "" });
                }
                this.profileSettingsVisible.set(true);
                break;

            default:
                break;
        }
    }

    private openArticles(response: ParseResponse): void {
        this.label.set("Результаты поиска по статьям");
        if (response.articles && response.articles.length > 0) {
            this.articles.set(response.articles);
        }
        this.articlesVisible.set(true);
    }
}
