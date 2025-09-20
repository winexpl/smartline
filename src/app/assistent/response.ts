interface Response {
    intent: "help" | "action" | "profile_update";
    action_type?: "quote_session";
    prefill?: any;
    token?: string;
    confidence: number;
    field?: string;
    value?: any;
}

