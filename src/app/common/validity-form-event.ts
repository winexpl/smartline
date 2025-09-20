export interface ValidityFormEvent<T> {
    isValid: boolean;
    value: T;
}

export interface DateRange {
    startDate: string;
    endDate: string;
}