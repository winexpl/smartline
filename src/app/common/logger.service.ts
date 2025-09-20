import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class LoggerService {
    constructor() {}

    public info(message: string, data?: unknown): void {
        console.log(`[INFO] ${message}`, data || "");
    }
    
    public network(message: string, data?: unknown, type?: NetworkLogType): void {
        console.log(`[NETWORK${type ? '-' + type : ''}] ${message}`, data || "");
    }

    public error(message: string, error?: unknown): void {
        console.error(`[ERROR] ${message}`, error || "");
    }

    public warn(message: string, data?: unknown): void {
        console.warn(`[WARN] ${message}`, data || "");
    }
}

export const NETWORK_LOG_TYPE = {
    RECV: "recv",
    SEND: "send" 
} as const;

export type NetworkLogType = typeof NETWORK_LOG_TYPE;
