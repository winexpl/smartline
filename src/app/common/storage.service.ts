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

    public set dateRange(newDateRange: { startDate: string; endDate: string }) {
        this.storage.setItem(STORAGE_KEYS.date_range_key, JSON.stringify(newDateRange));
    }
    public get dateRange(): { startDate: string; endDate: string } | null {
        const item = this.storage.getItem(STORAGE_KEYS.date_range_key);
        return item ? JSON.parse(item) : null;
    }
    public removeDateRange(): void {
        this.storage.removeItem(STORAGE_KEYS.date_range_key);
    }

    public set region(newRegion: string | null) {
        if (newRegion) {
            this.storage.setItem(STORAGE_KEYS.region_key, newRegion);
        } else {
            this.storage.removeItem(STORAGE_KEYS.region_key);
        }
    }

    public get region(): string | null {
        return this.storage.getItem(STORAGE_KEYS.region_key);
    }
}

export const STORAGE_KEYS = {
    inn_key: "inn",
    date_range_key: "dateRange",
    region_key: "region",
} as const;

export type StorageKeys = typeof STORAGE_KEYS;
