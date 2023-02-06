import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
import { WidgetService } from '@core/http/widget.service';
import * as i0 from "@angular/core";
export declare class WidgetsBundleSelectComponent implements ControlValueAccessor, OnInit, OnChanges {
    private store;
    private widgetService;
    bundlesScope: 'system' | 'tenant';
    selectFirstBundle: boolean;
    selectBundleAlias: string;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    widgetsBundles$: Observable<Array<WidgetsBundle>>;
    widgetsBundles: Array<WidgetsBundle>;
    widgetsBundle: WidgetsBundle | null;
    private propagateChange;
    constructor(store: Store<AppState>, widgetService: WidgetService);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: WidgetsBundle | null): void;
    widgetsBundleChanged(): void;
    isSystem(item: WidgetsBundle): boolean;
    private selectWidgetsBundleByAlias;
    private updateView;
    private getWidgetsBundles;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetsBundleSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetsBundleSelectComponent, "tb-widgets-bundle-select", never, { "bundlesScope": "bundlesScope"; "selectFirstBundle": "selectFirstBundle"; "selectBundleAlias": "selectBundleAlias"; "required": "required"; "disabled": "disabled"; }, {}, never, never, false>;
}
