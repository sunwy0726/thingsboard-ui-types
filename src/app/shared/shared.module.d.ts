import { MarkedOptionsService } from '@shared/components/marked-options.service';
import * as i0 from "@angular/core";
import * as i1 from "@shared/components/footer.component";
import * as i2 from "@shared/components/logo.component";
import * as i3 from "@shared/components/footer-fab-buttons.component";
import * as i4 from "@shared/components/toast.directive";
import * as i5 from "@shared/components/fullscreen.directive";
import * as i6 from "@shared/components/circular-progress.directive";
import * as i7 from "@shared/components/hotkeys.directive";
import * as i8 from "@shared/components/tb-anchor.component";
import * as i9 from "@shared/components/popover.component";
import * as i10 from "@shared/components/directives/sring-template-outlet.directive";
import * as i11 from "@shared/components/directives/component-outlet.directive";
import * as i12 from "@shared/components/markdown.component";
import * as i13 from "@shared/components/help.component";
import * as i14 from "@shared/components/help-markdown.component";
import * as i15 from "@shared/components/help-popup.component";
import * as i16 from "@shared/components/tb-checkbox.component";
import * as i17 from "@shared/components/tb-error.component";
import * as i18 from "@shared/components/cheatsheet.component";
import * as i19 from "@shared/components/breadcrumb.component";
import * as i20 from "@shared/components/user-menu.component";
import * as i21 from "@shared/components/time/timewindow.component";
import * as i22 from "@shared/components/time/timewindow-panel.component";
import * as i23 from "@shared/components/time/timeinterval.component";
import * as i24 from "@shared/components/time/quick-time-interval.component";
import * as i25 from "@shared/components/dashboard-select.component";
import * as i26 from "@shared/components/dashboard-select-panel.component";
import * as i27 from "@shared/components/time/datetime-period.component";
import * as i28 from "@shared/components/time/datetime.component";
import * as i29 from "@shared/components/time/timezone-select.component";
import * as i30 from "@shared/components/value-input.component";
import * as i31 from "@shared/components/dashboard-autocomplete.component";
import * as i32 from "@shared/components/dashboard-state-autocomplete.component";
import * as i33 from "@shared/components/entity/entity-subtype-autocomplete.component";
import * as i34 from "@shared/components/entity/entity-subtype-select.component";
import * as i35 from "@shared/components/entity/entity-subtype-list.component";
import * as i36 from "@shared/components/entity/entity-autocomplete.component";
import * as i37 from "@shared/components/entity/entity-list.component";
import * as i38 from "@shared/components/entity/entity-type-select.component";
import * as i39 from "@shared/components/entity/entity-select.component";
import * as i40 from "@shared/components/entity/entity-keys-list.component";
import * as i41 from "@shared/components/entity/entity-list-select.component";
import * as i42 from "@shared/components/entity/entity-type-list.component";
import * as i43 from "@shared/components/queue/queue-autocomplete.component";
import * as i44 from "@shared/components/relation/relation-type-autocomplete.component";
import * as i45 from "@shared/components/socialshare-panel.component";
import * as i46 from "@shared/components/string-items-list.component";
import * as i47 from "@shared/components/json-object-edit.component";
import * as i48 from "@shared/components/json-object-view.component";
import * as i49 from "@shared/components/json-content.component";
import * as i50 from "@shared/components/js-func.component";
import * as i51 from "@shared/components/css.component";
import * as i52 from "@shared/components/html.component";
import * as i53 from "@shared/components/fab-toolbar.component";
import * as i54 from "@shared/components/widgets-bundle-select.component";
import * as i55 from "@shared/components/dialog/confirm-dialog.component";
import * as i56 from "@shared/components/dialog/alert-dialog.component";
import * as i57 from "@shared/components/dialog/error-alert-dialog.component";
import * as i58 from "@shared/components/dialog/todo-dialog.component";
import * as i59 from "@shared/components/dialog/color-picker-dialog.component";
import * as i60 from "@shared/components/dialog/material-icons-dialog.component";
import * as i61 from "@shared/components/color-input.component";
import * as i62 from "@shared/components/material-icon-select.component";
import * as i63 from "@shared/components/dialog/node-script-test-dialog.component";
import * as i64 from "@shared/components/json-form/json-form.component";
import * as i65 from "@shared/components/image-input.component";
import * as i66 from "@shared/components/multiple-image-input.component";
import * as i67 from "@shared/components/file-input.component";
import * as i68 from "@shared/components/message-type-autocomplete.component";
import * as i69 from "@shared/components/kv-map.component";
import * as i70 from "@shared/components/nav-tree.component";
import * as i71 from "@shared/components/led-light.component";
import * as i72 from "@shared/components/markdown-editor.component";
import * as i73 from "@shared/pipe/nospace.pipe";
import * as i74 from "@shared/pipe/milliseconds-to-time-string.pipe";
import * as i75 from "@shared/pipe/enum-to-array.pipe";
import * as i76 from "@shared/pipe/highlight.pipe";
import * as i77 from "@shared/pipe/truncate.pipe";
import * as i78 from "@shared/pipe/tbJson.pipe";
import * as i79 from "@shared/pipe/file-size.pipe";
import * as i80 from "@shared/pipe/date-ago.pipe";
import * as i81 from "@shared/pipe/safe.pipe";
import * as i82 from "@shared/pipe/short-number.pipe";
import * as i83 from "@shared/pipe/selectable-columns.pipe";
import * as i84 from "@shared/pipe/keyboard-shortcut.pipe";
import * as i85 from "@shared/components/directives/tb-json-to-string.directive";
import * as i86 from "@shared/components/dialog/json-object-edit-dialog.component";
import * as i87 from "@shared/components/time/history-selector/history-selector.component";
import * as i88 from "@shared/components/entity/entity-gateway-select.component";
import * as i89 from "@shared/components/contact.component";
import * as i90 from "@shared/components/ota-package/ota-package-autocomplete.component";
import * as i91 from "@shared/components/widgets-bundle-search.component";
import * as i92 from "@shared/components/button/copy-button.component";
import * as i93 from "@shared/components/button/toggle-password.component";
import * as i94 from "@shared/components/protobuf-content.component";
import * as i95 from "@shared/components/vc/branch-autocomplete.component";
import * as i96 from "@shared/components/phone-input.component";
import * as i97 from "@shared/components/script-lang.component";
import * as i98 from "@shared/components/notification/notification.component";
import * as i99 from "@shared/components/notification/template-autocomplete.component";
import * as i100 from "@shared/components/slack-conversation-autocomplete.component";
import * as i101 from "@shared/layout/layout.directives";
import * as i102 from "@shared/components/color-picker/color-picker.component";
import * as i103 from "@angular/common";
import * as i104 from "@angular/router";
import * as i105 from "@ngx-translate/core";
import * as i106 from "@angular/material/badge";
import * as i107 from "@angular/material/button";
import * as i108 from "@angular/material/button-toggle";
import * as i109 from "@angular/material/checkbox";
import * as i110 from "@angular/material/icon";
import * as i111 from "@angular/material/card";
import * as i112 from "@angular/material/progress-bar";
import * as i113 from "@angular/material/input";
import * as i114 from "@angular/material/snack-bar";
import * as i115 from "@angular/material/sidenav";
import * as i116 from "@angular/material/toolbar";
import * as i117 from "@angular/material/menu";
import * as i118 from "@angular/material/grid-list";
import * as i119 from "@angular/material/dialog";
import * as i120 from "@angular/material/select";
import * as i121 from "@angular/material/tooltip";
import * as i122 from "@angular/material/table";
import * as i123 from "@angular/material/paginator";
import * as i124 from "@angular/material/sort";
import * as i125 from "@angular/material/progress-spinner";
import * as i126 from "@angular/material/divider";
import * as i127 from "@angular/material/tabs";
import * as i128 from "@angular/material/radio";
import * as i129 from "@angular/material/slide-toggle";
import * as i130 from "@angular/material/datepicker";
import * as i131 from "@mat-datetimepicker/core";
import * as i132 from "ngx-daterangepicker-material";
import * as i133 from "@angular/material/slider";
import * as i134 from "@angular/material/expansion";
import * as i135 from "@angular/material/stepper";
import * as i136 from "@angular/material/autocomplete";
import * as i137 from "@angular/material/chips";
import * as i138 from "@angular/material/list";
import * as i139 from "@angular/cdk/drag-drop";
import * as i140 from "angular-gridster2";
import * as i141 from "ngx-clipboard";
import * as i142 from "@angular/flex-layout";
import * as i143 from "@angular/forms";
import * as i144 from "@angular/cdk/overlay";
import * as i145 from "ngx-sharebuttons";
import * as i146 from "angular2-hotkeys";
import * as i147 from "@iplab/ngx-color-picker";
import * as i148 from "ngx-hm-carousel";
import * as i149 from "ngx-drag-drop";
import * as i150 from "@flowjs/ngx-flow";
import * as i151 from "ngx-flowchart";
import * as i152 from "ngx-markdown";
import * as i153 from "@tinymce/tinymce-angular";
export declare function MarkedOptionsFactory(markedOptionsService: MarkedOptionsService): MarkedOptionsService;
export declare class SharedModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SharedModule, [typeof i1.FooterComponent, typeof i2.LogoComponent, typeof i3.FooterFabButtonsComponent, typeof i4.ToastDirective, typeof i5.FullscreenDirective, typeof i6.CircularProgressDirective, typeof i7.TbHotkeysDirective, typeof i8.TbAnchorComponent, typeof i9.TbPopoverComponent, typeof i10.TbStringTemplateOutletDirective, typeof i11.TbComponentOutletDirective, typeof i9.TbPopoverDirective, typeof i12.TbMarkdownComponent, typeof i13.HelpComponent, typeof i14.HelpMarkdownComponent, typeof i15.HelpPopupComponent, typeof i16.TbCheckboxComponent, typeof i4.TbSnackBarComponent, typeof i17.TbErrorComponent, typeof i18.TbCheatSheetComponent, typeof i19.BreadcrumbComponent, typeof i20.UserMenuComponent, typeof i21.TimewindowComponent, typeof i22.TimewindowPanelComponent, typeof i23.TimeintervalComponent, typeof i24.QuickTimeIntervalComponent, typeof i25.DashboardSelectComponent, typeof i26.DashboardSelectPanelComponent, typeof i27.DatetimePeriodComponent, typeof i28.DatetimeComponent, typeof i29.TimezoneSelectComponent, typeof i30.ValueInputComponent, typeof i31.DashboardAutocompleteComponent, typeof i32.DashboardStateAutocompleteComponent, typeof i33.EntitySubTypeAutocompleteComponent, typeof i34.EntitySubTypeSelectComponent, typeof i35.EntitySubTypeListComponent, typeof i36.EntityAutocompleteComponent, typeof i37.EntityListComponent, typeof i38.EntityTypeSelectComponent, typeof i39.EntitySelectComponent, typeof i40.EntityKeysListComponent, typeof i41.EntityListSelectComponent, typeof i42.EntityTypeListComponent, typeof i43.QueueAutocompleteComponent, typeof i44.RelationTypeAutocompleteComponent, typeof i45.SocialSharePanelComponent, typeof i46.StringItemsListComponent, typeof i47.JsonObjectEditComponent, typeof i48.JsonObjectViewComponent, typeof i49.JsonContentComponent, typeof i50.JsFuncComponent, typeof i51.CssComponent, typeof i52.HtmlComponent, typeof i53.FabTriggerDirective, typeof i53.FabActionsDirective, typeof i53.FabToolbarComponent, typeof i54.WidgetsBundleSelectComponent, typeof i55.ConfirmDialogComponent, typeof i56.AlertDialogComponent, typeof i57.ErrorAlertDialogComponent, typeof i58.TodoDialogComponent, typeof i59.ColorPickerDialogComponent, typeof i60.MaterialIconsDialogComponent, typeof i61.ColorInputComponent, typeof i62.MaterialIconSelectComponent, typeof i63.NodeScriptTestDialogComponent, typeof i64.JsonFormComponent, typeof i65.ImageInputComponent, typeof i66.MultipleImageInputComponent, typeof i67.FileInputComponent, typeof i68.MessageTypeAutocompleteComponent, typeof i69.KeyValMapComponent, typeof i70.NavTreeComponent, typeof i71.LedLightComponent, typeof i72.MarkdownEditorComponent, typeof i73.NospacePipe, typeof i74.MillisecondsToTimeStringPipe, typeof i75.EnumToArrayPipe, typeof i76.HighlightPipe, typeof i77.TruncatePipe, typeof i78.TbJsonPipe, typeof i79.FileSizePipe, typeof i80.DateAgoPipe, typeof i81.SafePipe, typeof i82.ShortNumberPipe, typeof i83.SelectableColumnsPipe, typeof i84.KeyboardShortcutPipe, typeof i85.TbJsonToStringDirective, typeof i86.JsonObjectEditDialogComponent, typeof i87.HistorySelectorComponent, typeof i88.EntityGatewaySelectComponent, typeof i89.ContactComponent, typeof i90.OtaPackageAutocompleteComponent, typeof i91.WidgetsBundleSearchComponent, typeof i92.CopyButtonComponent, typeof i93.TogglePasswordComponent, typeof i94.ProtobufContentComponent, typeof i95.BranchAutocompleteComponent, typeof i96.PhoneInputComponent, typeof i97.TbScriptLangComponent, typeof i98.NotificationComponent, typeof i99.TemplateAutocompleteComponent, typeof i100.SlackConversationAutocompleteComponent, typeof i101.MdLgLayoutDirective, typeof i101.MdLgLayoutAlignDirective, typeof i101.MdLgLayoutGapDirective, typeof i101.MdLgShowHideDirective, typeof i101.GtMdLgLayoutDirective, typeof i101.GtMdLgLayoutAlignDirective, typeof i101.GtMdLgLayoutGapDirective, typeof i101.GtMdLgShowHideDirective, typeof i102.ColorPickerComponent], [typeof i103.CommonModule, typeof i104.RouterModule, typeof i105.TranslateModule, typeof i106.MatBadgeModule, typeof i107.MatButtonModule, typeof i108.MatButtonToggleModule, typeof i109.MatCheckboxModule, typeof i110.MatIconModule, typeof i111.MatCardModule, typeof i112.MatProgressBarModule, typeof i113.MatInputModule, typeof i114.MatSnackBarModule, typeof i115.MatSidenavModule, typeof i116.MatToolbarModule, typeof i117.MatMenuModule, typeof i118.MatGridListModule, typeof i119.MatDialogModule, typeof i120.MatSelectModule, typeof i121.MatTooltipModule, typeof i122.MatTableModule, typeof i123.MatPaginatorModule, typeof i124.MatSortModule, typeof i125.MatProgressSpinnerModule, typeof i126.MatDividerModule, typeof i127.MatTabsModule, typeof i128.MatRadioModule, typeof i129.MatSlideToggleModule, typeof i130.MatDatepickerModule, typeof i131.MatNativeDatetimeModule, typeof i131.MatDatetimepickerModule, typeof i132.NgxDaterangepickerMd, typeof i133.MatSliderModule, typeof i134.MatExpansionModule, typeof i135.MatStepperModule, typeof i136.MatAutocompleteModule, typeof i137.MatChipsModule, typeof i138.MatListModule, typeof i139.DragDropModule, typeof i140.GridsterModule, typeof i141.ClipboardModule, typeof i142.FlexLayoutModule, typeof i143.FormsModule, typeof i143.ReactiveFormsModule, typeof i144.OverlayModule, typeof i145.ShareModule, typeof i146.HotkeyModule, typeof i147.ColorPickerModule, typeof i148.NgxHmCarouselModule, typeof i149.DndModule, typeof i150.NgxFlowModule, typeof i151.NgxFlowchartModule, typeof i152.MarkdownModule], [typeof i1.FooterComponent, typeof i2.LogoComponent, typeof i3.FooterFabButtonsComponent, typeof i4.ToastDirective, typeof i5.FullscreenDirective, typeof i6.CircularProgressDirective, typeof i7.TbHotkeysDirective, typeof i8.TbAnchorComponent, typeof i10.TbStringTemplateOutletDirective, typeof i11.TbComponentOutletDirective, typeof i9.TbPopoverDirective, typeof i12.TbMarkdownComponent, typeof i13.HelpComponent, typeof i14.HelpMarkdownComponent, typeof i15.HelpPopupComponent, typeof i16.TbCheckboxComponent, typeof i17.TbErrorComponent, typeof i18.TbCheatSheetComponent, typeof i19.BreadcrumbComponent, typeof i20.UserMenuComponent, typeof i21.TimewindowComponent, typeof i22.TimewindowPanelComponent, typeof i23.TimeintervalComponent, typeof i24.QuickTimeIntervalComponent, typeof i25.DashboardSelectComponent, typeof i27.DatetimePeriodComponent, typeof i28.DatetimeComponent, typeof i29.TimezoneSelectComponent, typeof i31.DashboardAutocompleteComponent, typeof i32.DashboardStateAutocompleteComponent, typeof i33.EntitySubTypeAutocompleteComponent, typeof i34.EntitySubTypeSelectComponent, typeof i35.EntitySubTypeListComponent, typeof i36.EntityAutocompleteComponent, typeof i37.EntityListComponent, typeof i38.EntityTypeSelectComponent, typeof i39.EntitySelectComponent, typeof i40.EntityKeysListComponent, typeof i41.EntityListSelectComponent, typeof i42.EntityTypeListComponent, typeof i43.QueueAutocompleteComponent, typeof i44.RelationTypeAutocompleteComponent, typeof i45.SocialSharePanelComponent, typeof i46.StringItemsListComponent, typeof i47.JsonObjectEditComponent, typeof i48.JsonObjectViewComponent, typeof i49.JsonContentComponent, typeof i50.JsFuncComponent, typeof i51.CssComponent, typeof i52.HtmlComponent, typeof i53.FabTriggerDirective, typeof i53.FabActionsDirective, typeof i85.TbJsonToStringDirective, typeof i53.FabToolbarComponent, typeof i54.WidgetsBundleSelectComponent, typeof i30.ValueInputComponent, typeof i106.MatBadgeModule, typeof i107.MatButtonModule, typeof i108.MatButtonToggleModule, typeof i109.MatCheckboxModule, typeof i110.MatIconModule, typeof i111.MatCardModule, typeof i112.MatProgressBarModule, typeof i113.MatInputModule, typeof i114.MatSnackBarModule, typeof i115.MatSidenavModule, typeof i116.MatToolbarModule, typeof i117.MatMenuModule, typeof i118.MatGridListModule, typeof i119.MatDialogModule, typeof i120.MatSelectModule, typeof i121.MatTooltipModule, typeof i122.MatTableModule, typeof i123.MatPaginatorModule, typeof i124.MatSortModule, typeof i125.MatProgressSpinnerModule, typeof i126.MatDividerModule, typeof i127.MatTabsModule, typeof i128.MatRadioModule, typeof i129.MatSlideToggleModule, typeof i130.MatDatepickerModule, typeof i131.MatNativeDatetimeModule, typeof i131.MatDatetimepickerModule, typeof i132.NgxDaterangepickerMd, typeof i133.MatSliderModule, typeof i134.MatExpansionModule, typeof i135.MatStepperModule, typeof i136.MatAutocompleteModule, typeof i137.MatChipsModule, typeof i138.MatListModule, typeof i139.DragDropModule, typeof i140.GridsterModule, typeof i141.ClipboardModule, typeof i142.FlexLayoutModule, typeof i143.FormsModule, typeof i143.ReactiveFormsModule, typeof i144.OverlayModule, typeof i145.ShareModule, typeof i146.HotkeyModule, typeof i147.ColorPickerModule, typeof i148.NgxHmCarouselModule, typeof i153.EditorModule, typeof i149.DndModule, typeof i151.NgxFlowchartModule, typeof i152.MarkdownModule, typeof i55.ConfirmDialogComponent, typeof i56.AlertDialogComponent, typeof i57.ErrorAlertDialogComponent, typeof i58.TodoDialogComponent, typeof i59.ColorPickerDialogComponent, typeof i60.MaterialIconsDialogComponent, typeof i61.ColorInputComponent, typeof i62.MaterialIconSelectComponent, typeof i63.NodeScriptTestDialogComponent, typeof i64.JsonFormComponent, typeof i65.ImageInputComponent, typeof i66.MultipleImageInputComponent, typeof i67.FileInputComponent, typeof i68.MessageTypeAutocompleteComponent, typeof i69.KeyValMapComponent, typeof i70.NavTreeComponent, typeof i71.LedLightComponent, typeof i72.MarkdownEditorComponent, typeof i73.NospacePipe, typeof i74.MillisecondsToTimeStringPipe, typeof i75.EnumToArrayPipe, typeof i76.HighlightPipe, typeof i77.TruncatePipe, typeof i78.TbJsonPipe, typeof i84.KeyboardShortcutPipe, typeof i79.FileSizePipe, typeof i80.DateAgoPipe, typeof i81.SafePipe, typeof i82.ShortNumberPipe, typeof i83.SelectableColumnsPipe, typeof i104.RouterModule, typeof i105.TranslateModule, typeof i86.JsonObjectEditDialogComponent, typeof i87.HistorySelectorComponent, typeof i88.EntityGatewaySelectComponent, typeof i89.ContactComponent, typeof i90.OtaPackageAutocompleteComponent, typeof i91.WidgetsBundleSearchComponent, typeof i92.CopyButtonComponent, typeof i93.TogglePasswordComponent, typeof i94.ProtobufContentComponent, typeof i95.BranchAutocompleteComponent, typeof i96.PhoneInputComponent, typeof i97.TbScriptLangComponent, typeof i98.NotificationComponent, typeof i99.TemplateAutocompleteComponent, typeof i100.SlackConversationAutocompleteComponent, typeof i101.MdLgLayoutDirective, typeof i101.MdLgLayoutAlignDirective, typeof i101.MdLgLayoutGapDirective, typeof i101.MdLgShowHideDirective, typeof i101.GtMdLgLayoutDirective, typeof i101.GtMdLgLayoutAlignDirective, typeof i101.GtMdLgLayoutGapDirective, typeof i101.GtMdLgShowHideDirective, typeof i102.ColorPickerComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SharedModule>;
}
