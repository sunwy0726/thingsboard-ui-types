import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class MarkdownEditorComponent implements OnInit, ControlValueAccessor, OnDestroy {
    label: string;
    disabled: boolean;
    readonly: boolean;
    helpId: string;
    markdownEditorElmRef: ElementRef;
    private markdownEditor;
    editorMode: boolean;
    fullscreen: boolean;
    markdownValue: string;
    renderValue: string;
    ignoreChange: boolean;
    private propagateChange;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string): void;
    updateView(): void;
    onFullscreen(): void;
    toggleEditMode(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarkdownEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MarkdownEditorComponent, "tb-markdown-editor", never, { "label": "label"; "disabled": "disabled"; "readonly": "readonly"; "helpId": "helpId"; "required": "required"; }, {}, never, never>;
}
