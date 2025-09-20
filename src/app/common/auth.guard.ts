import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { StorageService } from "../common/storage.service";

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const storageService = inject(StorageService);

    if (storageService.inn) {
        return true;
    } else {
        router.navigate(["/logon"]);
        return false;
    }
};
