import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityService } from '@core/http/entity.service';
import { TruncatePipe } from '@shared/pipe/truncate.pipe';
import { OtaPackageInfo, OtaUpdateType } from '@shared/models/ota-package.models';
import { OtaPackageService } from '@core/http/ota-package.service';
import * as i0 from "@angular/core";
export declare class OtaPackageAutocompleteComponent implements ControlValueAccessor, OnInit {
    private store;
    translate: TranslateService;
    truncate: TruncatePipe;
    private entityService;
    private otaPackageService;
    private fb;
    otaPackageFormGroup: UntypedFormGroup;
    modelValue: string | EntityId | null;
    private otaUpdateType;
    get type(): OtaUpdateType;
    set type(value: OtaUpdateType);
    private deviceProfile;
    get deviceProfileId(): string;
    set deviceProfileId(value: string);
    labelText: string;
    requiredText: string;
    useFullEntityId: boolean;
    showDetailsPageLink: boolean;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    packageInput: ElementRef;
    filteredPackages: Observable<Array<OtaPackageInfo>>;
    searchText: string;
    packageURL: string;
    private dirty;
    private cleanFilteredPackages;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, truncate: TruncatePipe, entityService: EntityService, otaPackageService: OtaPackageService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    getCurrentEntity(): OtaPackageInfo | null;
    setDisabledState(isDisabled: boolean): void;
    textIsNotEmpty(text: string): boolean;
    writeValue(value: string | EntityId | null): void;
    onFocus(): void;
    reset(): void;
    updateView(value: string | null): void;
    displayPackageFn(packageInfo?: OtaPackageInfo): string | undefined;
    fetchPackages(searchText?: string): Observable<Array<OtaPackageInfo>>;
    clear(): void;
    get placeholderText(): string;
    get requiredErrorText(): string;
    get notFoundPackage(): string;
    get notMatchingPackage(): string;
    get hintText(): string;
    packageTitleText(firpackageInfomware: OtaPackageInfo): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<OtaPackageAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OtaPackageAutocompleteComponent, "tb-ota-package-autocomplete", never, { "type": "type"; "deviceProfileId": "deviceProfileId"; "labelText": "labelText"; "requiredText": "requiredText"; "useFullEntityId": "useFullEntityId"; "showDetailsPageLink": "showDetailsPageLink"; "required": "required"; "disabled": "disabled"; }, {}, never, never, false>;
}
