import { IStateControllerComponent, StateControllerState } from '@home/components/dashboard-page/states/state-controller.models';
import { IDashboardController } from '../dashboard-page.models';
import { DashboardState } from '@app/shared/models/dashboard.models';
import { Observable } from 'rxjs';
import { NgZone, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatesControllerService } from '@home/components/dashboard-page/states/states-controller.service';
import { EntityId } from '@app/shared/models/id/entity-id';
import { StateObject, StateParams } from '@app/core/api/widget-api.models';
import * as i0 from "@angular/core";
export declare abstract class StateControllerComponent implements IStateControllerComponent, OnInit, OnDestroy {
    protected router: Router;
    protected route: ActivatedRoute;
    protected ngZone: NgZone;
    protected statesControllerService: StatesControllerService;
    private stateChangedSubject;
    stateObject: StateControllerState;
    dashboardCtrl: IDashboardController;
    preservedState: any;
    stateControllerInstanceId: string;
    isMobileValue: boolean;
    set isMobile(val: boolean);
    get isMobile(): boolean;
    stateValue: string;
    set state(val: string);
    get state(): string;
    dashboardIdValue: string;
    set dashboardId(val: string);
    get dashboardId(): string;
    statesValue: {
        [id: string]: DashboardState;
    };
    set states(val: {
        [id: string]: DashboardState;
    });
    get states(): {
        [id: string]: DashboardState;
    };
    currentState: string;
    syncStateWithQueryParam: boolean;
    private rxSubscriptions;
    private inited;
    protected constructor(router: Router, route: ActivatedRoute, ngZone: NgZone, statesControllerService: StatesControllerService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected updateStateParam(newState: string, replaceCurrentHistoryUrl?: boolean): void;
    stateChanged(): Observable<string>;
    openRightLayout(): void;
    preserveState(): void;
    cleanupPreservedStates(): void;
    reInit(): void;
    private decodeStateParam;
    abstract init(): any;
    protected abstract onMobileChanged(): any;
    protected abstract onStateIdChanged(): any;
    protected abstract onStatesChanged(): any;
    protected abstract onStateChanged(): any;
    protected abstract stateControllerId(): string;
    abstract getEntityId(entityParamName: string): EntityId;
    abstract getStateId(): string;
    abstract getStateIdAtIndex(index: number): string;
    abstract getStateIndex(): number;
    abstract getStateParams(): StateParams;
    abstract getStateParamsByStateId(stateId: string): StateParams;
    abstract navigatePrevState(index: number, params?: StateParams): void;
    abstract openState(id: string, params?: StateParams, openRightLayout?: boolean): void;
    abstract pushAndOpenState(states: Array<StateObject>, openRightLayout?: boolean): void;
    abstract resetState(): void;
    abstract updateState(id?: string, params?: StateParams, openRightLayout?: boolean): void;
    abstract getCurrentStateName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StateControllerComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StateControllerComponent, never, never, {}, {}, never, never, false, never>;
}
