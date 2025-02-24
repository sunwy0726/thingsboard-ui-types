import { OnDestroy } from '@angular/core';
import { Color, ColorPickerControl } from '@iplab/ngx-color-picker';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare enum ColorType {
    hex = "hex",
    hexa = "hexa",
    rgba = "rgba",
    rgb = "rgb",
    hsla = "hsla",
    hsl = "hsl",
    cmyk = "cmyk"
}
export declare class ColorPickerComponent implements ControlValueAccessor, OnDestroy {
    selectedPresentation: number;
    presentations: ColorType[];
    control: ColorPickerControl;
    private modelValue;
    private subscriptions;
    private propagateChange;
    private setValue;
    constructor();
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: string): void;
    private updateModel;
    ngOnDestroy(): void;
    changePresentation(): void;
    getValueByType(color: Color, type: ColorType): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorPickerComponent, "tb-color-picker", never, {}, {}, never, never, false, never>;
}
