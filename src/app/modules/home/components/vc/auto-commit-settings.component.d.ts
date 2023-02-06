import { OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AdminService } from '@core/http/admin.service';
import { AutoCommitSettings } from '@shared/models/settings.models';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import { Observable } from 'rxjs';
import { EntityType } from '@shared/models/entity-type.models';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class AutoCommitSettingsComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private adminService;
    private dialogService;
    private sanitizer;
    private translate;
    fb: UntypedFormBuilder;
    autoCommitSettingsForm: UntypedFormGroup;
    settings: AutoCommitSettings;
    entityTypes: typeof EntityType;
    isReadOnly: Observable<boolean>;
    constructor(store: Store<AppState>, adminService: AdminService, dialogService: DialogService, sanitizer: DomSanitizer, translate: TranslateService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    entityTypesFormGroupArray(): UntypedFormGroup[];
    entityTypesFormGroupExpanded(entityTypeControl: AbstractControl): boolean;
    trackByEntityType(index: number, entityTypeControl: AbstractControl): any;
    removeEntityType(index: number): void;
    addEnabled(): boolean;
    addEntityType(): void;
    removeAll(): void;
    entityTypeText(entityTypeControl: AbstractControl): SafeHtml;
    allowedEntityTypes(entityTypeControl?: AbstractControl): Array<EntityType>;
    save(): void;
    delete(formDirective: FormGroupDirective): void;
    private prepareEntityTypesFormArray;
    private createEntityTypeControl;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoCommitSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutoCommitSettingsComponent, "tb-auto-commit-settings", never, {}, {}, never, never, false>;
}
