import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { BooleanOperation, EntityKeyValueType, KeyFilterPredicateUserInfo, NumericOperation, StringOperation } from '@shared/models/query/query.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface FilterUserInfoDialogData {
    key: string;
    valueType: EntityKeyValueType;
    operation: StringOperation | BooleanOperation | NumericOperation;
    keyFilterPredicateUserInfo: KeyFilterPredicateUserInfo;
    readonly: boolean;
}
export declare class FilterUserInfoDialogComponent extends DialogComponent<FilterUserInfoDialogComponent, KeyFilterPredicateUserInfo> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: FilterUserInfoDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<FilterUserInfoDialogComponent, KeyFilterPredicateUserInfo>;
    private fb;
    private translate;
    filterUserInfoFormGroup: UntypedFormGroup;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: FilterUserInfoDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<FilterUserInfoDialogComponent, KeyFilterPredicateUserInfo>, fb: UntypedFormBuilder, translate: TranslateService);
    private onAutogeneratedLabelChange;
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterUserInfoDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterUserInfoDialogComponent, "tb-filter-user-info-dialog", never, {}, {}, never, never, false>;
}
