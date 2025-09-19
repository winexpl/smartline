import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SmartLineComponent } from "./smart-line.component";

describe("SmartLineComponent", () => {
    let component: SmartLineComponent;
    let fixture: ComponentFixture<SmartLineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SmartLineComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SmartLineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
