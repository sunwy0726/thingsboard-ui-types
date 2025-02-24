import { AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FlowDirective } from '@flowjs/ngx-flow';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UtilsService } from '@core/services/utils.service';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import { FileSizePipe } from '@shared/pipe/file-size.pipe';
import * as i0 from "@angular/core";
export declare class ImageInputComponent extends PageComponent implements AfterViewInit, OnDestroy, ControlValueAccessor {
    protected store: Store<AppState>;
    private utils;
    private sanitizer;
    private dialog;
    private translate;
    private fileSize;
    private cd;
    label: string;
    maxSizeByte: number;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    showClearButton: boolean;
    showPreview: boolean;
    inputId: string;
    imageUrl: string;
    safeImageUrl: SafeUrl;
    flow: FlowDirective;
    autoUploadSubscription: Subscription;
    private propagateChange;
    constructor(store: Store<AppState>, utils: UtilsService, sanitizer: DomSanitizer, dialog: DialogService, translate: TranslateService, fileSize: FileSizePipe, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string): void;
    private updateModel;
    clearImage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageInputComponent, "tb-image-input", never, { "label": "label"; "maxSizeByte": "maxSizeByte"; "required": "required"; "disabled": "disabled"; "showClearButton": "showClearButton"; "showPreview": "showPreview"; "inputId": "inputId"; }, {}, never, never, false, never>;
}
