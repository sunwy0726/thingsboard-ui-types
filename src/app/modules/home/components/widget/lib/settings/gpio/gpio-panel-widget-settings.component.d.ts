import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { AbstractControl, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class GpioPanelWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    gpioPanelWidgetSettingsForm: UntypedFormGroup;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected doUpdateSettings(settingsForm: UntypedFormGroup, settings: WidgetSettings): void;
    private prepareGpioListFormArray;
    gpioListFormArray(): UntypedFormArray;
    trackByGpioItem(index: number, gpioItemControl: AbstractControl): any;
    removeGpioItem(index: number): void;
    addGpioItem(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GpioPanelWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GpioPanelWidgetSettingsComponent, "tb-gpio-panel-widget-settings", never, {}, {}, never, never, false>;
}
