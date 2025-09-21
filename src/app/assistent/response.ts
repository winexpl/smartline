import { Row } from "../form/form.component";
import { Article } from "../list/list.component";

export interface ParseResponse {
    tags: string[];
    rows: Row[]; // сюда херачу все строки для автозаполнения
    intent: string;
    action_type: string;
    intent_confidence?: number;
    action_type_confidence?: number;
    created_at?: string;
    entities?: {
        purchase_id: null | string;
        inn: null | string;
        as_of_date: null;
        qty: null;
        budget: null;
    };
    articles?: Article[];
    routing?: {
        type: string;
        search: string;
        hint: string;
        as_of_date: string;
        name_query: string;
        inn: string;
        purchase_id: string;
        target_purchase_id: string;
        action_type: string;
        profile_key: string;
        profile_value: string;
        prefill: {
            // автозаполнение
            inn: null;
            qty: string;
            budget: null;
        };
    };
}

export const INTENT = {
    HELP: "HELP",
    ACTION: "ACTION",
    UNKNOWN: "unknown",
    VIEW: "VIEW",
} as const;

export const ACTION_TYPE = {
    QUOTE_SESSION: "QUOTE_SESSION",
    DIRECT_PURCHASE: "DIRECT_PURCHASE",
    NEEDS_PROCUREMENT: "NEEDS_PROCUREMENT",
    PROFILE_UPDATE: "PROFILE_UPDATE",
    REPEAT: "REPEAT",
    OTHER: "OTHER",
} as const;

export type ActionType = typeof ACTION_TYPE;
export type Intent = typeof INTENT;

export const ACTION_TO_LABEL = new Map<string, string>([
    [ACTION_TYPE.QUOTE_SESSION, "Создание котировочной сессии"],
    [INTENT.VIEW, "Просмотр сессий"],
    [INTENT.HELP, "Статьи"],
    [ACTION_TYPE.DIRECT_PURCHASE, "Создание запроса на прямую закупку"],
    [ACTION_TYPE.NEEDS_PROCUREMENT, "Создание потребности"],
    [ACTION_TYPE.PROFILE_UPDATE, "Обновление профиля"],
    [ACTION_TYPE.REPEAT, "Повторение заказа"],
    [ACTION_TYPE.OTHER, "Другое"],
]);
