export const INN_CONTROL_INPUT_STRINGS = {
    INN: "ИНН",
    INPUT_INN: "Введите ИНН",
    NOT_VALID_INN: "Неверный формат ИНН",
    BUTTON_SAVE: "Сохранить",
    BUTTON_CHANGE: "Изменить",
} as const;

export type InnControlInputStrings = typeof INN_CONTROL_INPUT_STRINGS;
