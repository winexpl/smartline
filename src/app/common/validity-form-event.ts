export interface ValidityFormEvent<T> {
    isValid: boolean;
    value: T;
}

export interface SliceDate {
    startDate: string | Date;
    endDate: string | Date;
}