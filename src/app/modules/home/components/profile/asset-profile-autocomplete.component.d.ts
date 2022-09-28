import { ElementRef, EventEmitter, NgZone, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { TruncatePipe } from '@shared//pipe/truncate.pipe';
import { MatDialog } from '@angular/material/dialog';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { AssetProfileId } from '@shared/models/id/asset-profile-id';
import { AssetProfile, AssetProfileInfo } from '@shared/models/asset.models';
import { AssetProfileService } from '@core/http/asset-profile.service';
import * as i0 from "@angular/core";
export declare class AssetProfileAutocompleteComponent implements ControlValueAccessor, OnInit {
    private store;
    translate: TranslateService;
    truncate: TruncatePipe;
    private assetProfileService;
    private fb;
    private zone;
    private dialog;
    selectAssetProfileFormGroup: FormGroup;
    modelValue: AssetProfileId | null;
    selectDefaultProfile: boolean;
    selectFirstProfile: boolean;
    displayAllOnEmpty: boolean;
    editProfileEnabled: boolean;
    addNewProfile: boolean;
    showDetailsPageLink: boolean;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    hint: string;
    assetProfileUpdated: EventEmitter<AssetProfileId>;
    assetProfileChanged: EventEmitter<AssetProfileInfo>;
    assetProfileInput: ElementRef;
    assetProfileAutocomplete: MatAutocomplete;
    filteredAssetProfiles: Observable<Array<AssetProfileInfo>>;
    searchText: string;
    assetProfileURL: string;
    private dirty;
    private ignoreClosedPanel;
    private allAssetProfile;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, truncate: TruncatePipe, assetProfileService: AssetProfileService, fb: FormBuilder, zone: NgZone, dialog: MatDialog);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    selectDefaultAssetProfileIfNeeded(): void;
    selectFirstAssetProfileIfNeeded(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: AssetProfileId | null): void;
    onFocus(): void;
    onPanelClosed(): void;
    updateView(assetProfile: AssetProfileInfo | null): void;
    displayAssetProfileFn(profile?: AssetProfileInfo): string | undefined;
    fetchAssetProfiles(searchText?: string): Observable<Array<AssetProfileInfo>>;
    clear(): void;
    textIsNotEmpty(text: string): boolean;
    assetProfileEnter($event: KeyboardEvent): void;
    createAssetProfile($event: Event, profileName: string): void;
    editAssetProfile($event: Event): void;
    openAssetProfileDialog(assetProfile: AssetProfile, isAdd: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssetProfileAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AssetProfileAutocompleteComponent, "tb-asset-profile-autocomplete", never, { "selectDefaultProfile": "selectDefaultProfile"; "selectFirstProfile": "selectFirstProfile"; "displayAllOnEmpty": "displayAllOnEmpty"; "editProfileEnabled": "editProfileEnabled"; "addNewProfile": "addNewProfile"; "showDetailsPageLink": "showDetailsPageLink"; "required": "required"; "disabled": "disabled"; "hint": "hint"; }, { "assetProfileUpdated": "assetProfileUpdated"; "assetProfileChanged": "assetProfileChanged"; }, never, never>;
}
