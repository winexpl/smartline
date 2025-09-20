export interface Response {
    intent: Intent;
    action_type?: "quote_session";
    // autosuggest
    prefill?: any;
    token?: string; // sent server if action_type is ACTION for prefill
    // articles
    articles?: string[];
    // profile settings update
    profile_key?: string;
    profile_value?: string;
}

export const INTENT = {
    HELP: "help",
    ACTION: "action",
    PROFILE_UPDATE: "profile_update"
} as const;

export type Intent = typeof INTENT;
