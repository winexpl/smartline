import { inject, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { SliceDate } from "./validity-form-event";
import { LoggerService } from "./logger.service";

@Injectable({
    providedIn: "root",
})
export class StorageService {
    private readonly storage = window.localStorage;
    private readonly loggerService = inject(LoggerService);

    private readonly settingsChanges = new Subject<void>();
    public readonly settingsChanges$ = this.settingsChanges.asObservable();

    public get inn(): string | null {
        return this.getItem(STORAGE_KEYS.inn_key);
    }
    public set inn(newInn: string | null) {
        if (!newInn) {
            this.removeItem(STORAGE_KEYS.inn_key);
        } else {
            this.setItem(STORAGE_KEYS.inn_key, newInn);
        }
    }

    public set dateRange(newDateRange: SliceDate | null) {
        if (!newDateRange) {
            this.removeItem(STORAGE_KEYS.date_range_key);
        } else {
            this.setItem(STORAGE_KEYS.date_range_key, JSON.stringify(newDateRange));
        }
    }
    public get dateRange(): SliceDate | null {
        const item = this.getItem(STORAGE_KEYS.date_range_key);
        return item ? JSON.parse(item) : null;
    }

    public set region(newRegion: string | null) {
        if (newRegion) {
            this.setItem(STORAGE_KEYS.region_key, newRegion);
        } else {
            this.removeItem(STORAGE_KEYS.region_key);
        }
    }
    public get region(): string | null {
        return this.getItem(STORAGE_KEYS.region_key);
    }

    public setItem(key: string, value: string): void {
        this.storage.setItem(key, value);
        this.loggerService.info("user settings changed", this.getAllKeysWithValues());
        this.settingsChanges.next();
    }

    public getItem(key: string): string | null {
        return this.storage.getItem(key);
    }

    public removeItem(key: string): void {
        this.storage.removeItem(key);
        this.loggerService.info("user settings changed", this.getAllKeysWithValues());
        this.settingsChanges.next();
    }

    public getAllKeys(): string[] {
        return Object.values(STORAGE_KEYS);
    }

    public getAllKeysWithValues(): string[] {
        const result: string[] = [];
        this.getAllKeys().forEach((key: string) => {
            result.push(`${key}: ${this.getItem(key)}`);
        });
        return result;
    }
}

export const STORAGE_KEYS = {
    inn_key: "inn",
    date_range_key: "dateRange",
    region_key: "region",
} as const;

export type StorageKeys = typeof STORAGE_KEYS;
