import { ChangeDetectorRef, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NgForm, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipGrid, MatChipInputEvent, MatChipRow } from '@angular/material/chips';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { DataKey, DatasourceType, JsonSettingsSchema, Widget, widgetType } from '@shared/models/widget.models';
import { IAliasController } from '@core/api/widget-api.models';
import { DataKeysCallbacks } from './data-keys.component.models';
import { UtilsService } from '@core/services/utils.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { TruncatePipe } from '@shared/pipe/truncate.pipe';
import { DialogService } from '@core/services/dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { Dashboard } from '@shared/models/dashboard.models';
import { DndDropEvent } from 'ngx-drag-drop/lib/dnd-dropzone.directive';
import * as i0 from "@angular/core";
export declare class DataKeysComponent implements ControlValueAccessor, OnInit, OnChanges, ErrorStateMatcher {
    private store;
    private errorStateMatcher;
    translate: TranslateService;
    private utils;
    private dialogs;
    private dialog;
    private fb;
    private cd;
    private renderer;
    truncate: TruncatePipe;
    datasourceTypes: typeof DatasourceType;
    widgetTypes: typeof widgetType;
    dataKeyTypes: typeof DataKeyType;
    keysListFormGroup: UntypedFormGroup;
    modelValue: Array<DataKey> | null;
    widgetType: widgetType;
    datasourceType: DatasourceType;
    private maxDataKeysValue;
    get maxDataKeys(): number;
    set maxDataKeys(value: number);
    optDataKeys: boolean;
    aliasController: IAliasController;
    datakeySettingsSchema: JsonSettingsSchema;
    dataKeySettingsDirective: string;
    dashboard: Dashboard;
    widget: Widget;
    callbacks: DataKeysCallbacks;
    entityAliasId: string;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    keyInput: ElementRef<HTMLInputElement>;
    matAutocomplete: MatAutocomplete;
    chipList: MatChipGrid;
    keys: Array<DataKey>;
    filteredKeys: Observable<Array<DataKey>>;
    separatorKeysCodes: number[];
    alarmKeys: Array<DataKey>;
    functionTypeKeys: Array<DataKey>;
    dataKeyType: DataKeyType;
    placeholder: string;
    secondaryPlaceholder: string;
    requiredText: string;
    searchText: string;
    dndId: string;
    dragIndex: number;
    private latestSearchTextResult;
    private fetchObservable$;
    private dirty;
    private propagateChange;
    constructor(store: Store<AppState>, errorStateMatcher: ErrorStateMatcher, translate: TranslateService, utils: UtilsService, dialogs: DialogService, dialog: MatDialog, fb: UntypedFormBuilder, cd: ChangeDetectorRef, renderer: Renderer2, truncate: TruncatePipe);
    updateValidators(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    maxDataKeysText(): string;
    private updateParams;
    private reset;
    ngOnChanges(changes: SimpleChanges): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Array<DataKey> | null): void;
    onFocus(): void;
    private addFromChipValue;
    addKey(key: DataKey): void;
    add(event: MatChipInputEvent): void;
    remove(key: DataKey): void;
    chipDragStart(index: number, chipRow: MatChipRow, placeholderChipRow: MatChipRow): void;
    chipDragEnd(): void;
    onChipDrop(event: DndDropEvent): void;
    showColorPicker(key: DataKey): void;
    editDataKey(key: DataKey, index: number): void;
    createKey(name: string, dataKeyType?: DataKeyType): void;
    displayKeyFn(key?: DataKey): string | undefined;
    dataKeyHasAggregation(key: DataKey): boolean;
    dataKeyHasPostprocessing(key: DataKey): boolean;
    private fetchKeys;
    private getKeys;
    private createDataKeyFilter;
    textIsNotEmpty(text: string): boolean;
    clear(value?: string): void;
    get isCountDatasource(): boolean;
    private clearSearchCache;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataKeysComponent, [null, { skipSelf: true; }, null, null, null, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataKeysComponent, "tb-data-keys", never, { "widgetType": "widgetType"; "datasourceType": "datasourceType"; "maxDataKeys": "maxDataKeys"; "optDataKeys": "optDataKeys"; "aliasController": "aliasController"; "datakeySettingsSchema": "datakeySettingsSchema"; "dataKeySettingsDirective": "dataKeySettingsDirective"; "dashboard": "dashboard"; "widget": "widget"; "callbacks": "callbacks"; "entityAliasId": "entityAliasId"; "required": "required"; "disabled": "disabled"; }, {}, never, never, false, never>;
}
