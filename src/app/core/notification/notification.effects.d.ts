import { Actions } from '@ngrx/effects';
import { NotificationActions } from '@app/core/notification/notification.actions';
import { NotificationService } from '@app/core/services/notification.service';
import * as i0 from "@angular/core";
export declare class NotificationEffects {
    private actions$;
    private notificationService;
    constructor(actions$: Actions<NotificationActions>, notificationService: NotificationService);
    dispatchNotification: import("rxjs").Observable<void> & import("@ngrx/effects").CreateEffectMetadata;
    hideNotification: import("rxjs").Observable<void> & import("@ngrx/effects").CreateEffectMetadata;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NotificationEffects>;
}
