import { AfterViewInit, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { AliasEntityType, EntityType } from '@shared/models/entity-type.models';
import { BaseData } from '@shared/models/base-data';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityService } from '@core/http/entity.service';
import * as i0 from "@angular/core";
export declare class EntityAutocompleteComponent implements ControlValueAccessor, OnInit, AfterViewInit {
    private store;
    translate: TranslateService;
    private entityService;
    private fb;
    selectEntityFormGroup: UntypedFormGroup;
    modelValue: string | null;
    entityTypeValue: EntityType | AliasEntityType;
    entitySubtypeValue: string;
    set entityType(entityType: EntityType);
    set entitySubtype(entitySubtype: string);
    excludeEntityIds: Array<string>;
    labelText: string;
    requiredText: string;
    appearance: MatFormFieldAppearance;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    entityChanged: EventEmitter<BaseData<EntityId>>;
    entityInput: ElementRef;
    entityText: string;
    noEntitiesMatchingText: string;
    entityRequiredText: string;
    filteredEntities: Observable<Array<BaseData<EntityId>>>;
    searchText: string;
    private dirty;
    private refresh$;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, entityService: EntityService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    load(): void;
    getCurrentEntity(): BaseData<EntityId> | null;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string | EntityId | null): Promise<void>;
    onFocus(): void;
    reset(): void;
    updateView(value: string | null, entity: BaseData<EntityId> | null): void;
    displayEntityFn(entity?: BaseData<EntityId>): string | undefined;
    fetchEntities(searchText?: string): Observable<Array<BaseData<EntityId>>>;
    clear(): void;
    checkEntityType(entityType: EntityType | AliasEntityType): EntityType;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityAutocompleteComponent, "tb-entity-autocomplete", never, { "entityType": "entityType"; "entitySubtype": "entitySubtype"; "excludeEntityIds": "excludeEntityIds"; "labelText": "labelText"; "requiredText": "requiredText"; "appearance": "appearance"; "required": "required"; "disabled": "disabled"; }, { "entityChanged": "entityChanged"; }, never, never, false>;
}
