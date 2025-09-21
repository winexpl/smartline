import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { ParseResponse } from "./response";
import { Row } from "../form/form.component";

@Injectable({
    providedIn: "root",
})
export class AssistentService {
    private readonly httpClient = inject(HttpClient);
    private readonly baseUrl = "https://6eef-afll-tfs2.gw-1a.dockhost.net/api/v1/assistant";
    // private readonly baseUrl = "/api/v1/assistant";

    constructor() {}

    public parse(query: string): Observable<ParseResponse> {
        return this.httpClient
            .post<ParseResponse>(
                `${this.baseUrl}/query/`,
                { query },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .pipe(
                tap((response) => {
                    console.log("Response:", response);
                    if (response.routing?.prefill) {
                        response.rows = this.labelByRowKey(response.routing?.prefill);
                    }
                })
            );
    }

    // public fillRows(response: ParseResponse): ParseResponse {
    //     if (response.routing?.prefill) {
    //         response.rows = this.labelByRowKey(response.routing.prefill);
    //     }
    // }

    // AUTOSUGGEST
    public labelByRowKey(prefill: { inn: null; qty: string; budget: null }): Row[] {
        const result = [];
        if (prefill.qty) {
            result.push({ key: "Количество", value: prefill.qty });
        }
        if (prefill.inn) {
            result.push({ key: "ИНН", value: prefill.inn });
        }
        if (prefill.budget) {
            result.push({ key: "Бюджет", value: prefill.budget });
        }
        return result;
    }
}
