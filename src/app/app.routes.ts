import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { authGuard } from "./common/auth.guard";
import { LogonComponent } from "./logon/logon.component";

export const routes: Routes = [
    {
        path: "",
        component: MainComponent,
        canActivate: [authGuard],
    },
    {
        path: "logon",
        component: LogonComponent,
    },
    {
        path: "**",
        redirectTo: "",
    },
];
