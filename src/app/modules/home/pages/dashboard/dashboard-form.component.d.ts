import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityComponent } from '../../components/entity/entity.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Dashboard } from '@shared/models/dashboard.models';
import { DashboardService } from '@core/http/dashboard.service';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import * as i0 from "@angular/core";
export declare class DashboardFormComponent extends EntityComponent<Dashboard> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    private dashboardService;
    protected entityValue: Dashboard;
    protected entitiesTableConfigValue: EntityTableConfig<Dashboard>;
    fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    dashboardScope: 'tenant' | 'customer' | 'customer_user' | 'edge';
    customerId: string;
    publicLink: string;
    assignedCustomersText: string;
    constructor(store: Store<AppState>, translate: TranslateService, dashboardService: DashboardService, entityValue: Dashboard, entitiesTableConfigValue: EntityTableConfig<Dashboard>, fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    isPublic(entity: Dashboard): boolean;
    isCurrentPublicCustomer(entity: Dashboard): boolean;
    hideDelete(): boolean;
    buildForm(entity: Dashboard): UntypedFormGroup;
    updateForm(entity: Dashboard): void;
    prepareFormValue(formValue: any): any;
    onPublicLinkCopied($event: any): void;
    onDashboardIdCopied($event: any): void;
    private updateFields;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardFormComponent, "tb-dashboard-form", never, {}, {}, never, never, false>;
}
