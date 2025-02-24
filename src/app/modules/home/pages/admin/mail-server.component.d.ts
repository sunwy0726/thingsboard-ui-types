import { OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AdminSettings, MailServerSettings } from '@shared/models/settings.models';
import { AdminService } from '@core/http/admin.service';
import { TranslateService } from '@ngx-translate/core';
import { HasConfirmForm } from '@core/guards/confirm-on-exit.guard';
import * as i0 from "@angular/core";
export declare class MailServerComponent extends PageComponent implements OnInit, OnDestroy, HasConfirmForm {
    protected store: Store<AppState>;
    private router;
    private adminService;
    private translate;
    fb: UntypedFormBuilder;
    mailSettings: UntypedFormGroup;
    adminSettings: AdminSettings<MailServerSettings>;
    smtpProtocols: string[];
    showChangePassword: boolean;
    tlsVersions: string[];
    private destroy$;
    constructor(store: Store<AppState>, router: Router, adminService: AdminService, translate: TranslateService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    buildMailServerSettingsForm(): void;
    enableProxyChanged(): void;
    enableMailPassword(enable: boolean): void;
    sendTestMail(): void;
    save(): void;
    confirmForm(): UntypedFormGroup;
    private get mailSettingsFormValue();
    static ɵfac: i0.ɵɵFactoryDeclaration<MailServerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MailServerComponent, "tb-mail-server", never, {}, {}, never, never, false, never>;
}
