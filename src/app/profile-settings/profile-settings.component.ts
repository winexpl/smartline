import { Component, inject } from '@angular/core';
import { InnControlInputComponent } from "../common/inn-control-input/inn-control-input.component";
import { DateRangeControlInputComponent } from "../common/date-range-control-input/date-range-control-input.component";
import { SliceDate, ValidityFormEvent } from '../common/validity-form-event';
import { StorageService } from '../common/storage.service';

@Component({
  selector: 'top4eu-profile-settings',
  imports: [InnControlInputComponent, DateRangeControlInputComponent],
  templateUrl: './profile-settings.component.html',
  styleUrl: './profile-settings.component.scss'
})
export class ProfileSettingsComponent {
    private dateRange:  ValidityFormEvent<SliceDate> | null = null;
    private inn: ValidityFormEvent<string> | null = null;
    public region: string | null = null;

    private readonly storageService = inject(StorageService);

    public onInnValidityChanged(event: ValidityFormEvent<string>): void {
        this.inn = event;
    }

    public onDateRangeValidityChanged(event: ValidityFormEvent<SliceDate>): void {
        this.dateRange = event;
    }

    public isFormValid(): boolean {
        if (!this.inn || !this.dateRange || !this.region) {
            return false;
        }
        return this.inn?.isValid && this.dateRange?.isValid;
    }

    public saveSettings(): void {
        if (!this.isFormValid()) {
            return;
        }
        this.storageService.inn = this.inn!.value;
        this.storageService.dateRange = this.dateRange!.value;
        this.storageService.region = this.region;
    }
}
