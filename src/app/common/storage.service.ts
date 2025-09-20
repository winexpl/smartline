import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class StorageService {
    private readonly storage = window.localStorage;

    public get inn(): string | null {
        return this.storage.getItem(STORAGE_KEYS.inn_key);
    }
    public set inn(newInn: string) {
        this.storage.setItem(STORAGE_KEYS.inn_key, newInn);
    }
    public removeInn(): void {
        this.storage.removeItem(STORAGE_KEYS.inn_key);
        console.log(this.inn);
        
    }
}

export const STORAGE_KEYS = {
    inn_key: "inn",
} as const;

export type StorageKeys = typeof STORAGE_KEYS;
