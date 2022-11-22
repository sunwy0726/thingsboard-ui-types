/// <reference types="tooltipster" />
import L, { FeatureGroup, LatLngBounds, LatLngTuple } from 'leaflet';
import 'leaflet-providers';
import { MarkerClusterGroup, MarkerClusterGroupOptions } from 'leaflet.markercluster/dist/leaflet.markercluster';
import '@geoman-io/leaflet-geoman-free';
import { CircleData, MarkerIconInfo, WidgetPolygonSettings, WidgetPolylineSettings, WidgetUnitedMapSettings } from './map-models';
import { Marker } from './markers';
import { Observable } from 'rxjs';
import { Polyline } from './polyline';
import { Polygon } from './polygon';
import { Circle } from './circle';
import { WidgetContext } from '@home/models/widget-component.models';
import { TranslateService } from '@ngx-translate/core';
import { FormattedData, ReplaceInfo } from '@shared/models/widget.models';
import ITooltipsterInstance = JQueryTooltipster.ITooltipsterInstance;
export default abstract class LeafletMap {
    ctx: WidgetContext;
    $container: HTMLElement;
    markers: Map<string, Marker>;
    polylines: Map<string, Polyline>;
    polygons: Map<string, Polygon>;
    circles: Map<string, Circle>;
    map: L.Map;
    options: WidgetUnitedMapSettings;
    bounds: L.LatLngBounds;
    datasources: FormattedData[];
    markersCluster: MarkerClusterGroup;
    points: FeatureGroup;
    markersData: FormattedData[];
    polygonsData: FormattedData[];
    circleData: FormattedData[];
    defaultMarkerIconInfo: MarkerIconInfo;
    loadingDiv: JQuery<HTMLElement>;
    loading: boolean;
    replaceInfoLabelMarker: Array<ReplaceInfo>;
    markerLabelText: string;
    polygonLabelText: string;
    circleLabelText: string;
    replaceInfoLabelPolygon: Array<ReplaceInfo>;
    replaceInfoTooltipMarker: Array<ReplaceInfo>;
    replaceInfoTooltipCircle: Array<ReplaceInfo>;
    markerTooltipText: string;
    drawRoutes: boolean;
    updatePending: boolean;
    editPolygons: boolean;
    editCircle: boolean;
    selectedEntity: FormattedData;
    ignoreUpdateBounds: boolean;
    initDragModeIgnoreUpdateBoundsSet: boolean;
    southWest: L.LatLng;
    northEast: L.LatLng;
    saveLocation: (e: FormattedData, values: {
        [key: string]: any;
    }) => Observable<any>;
    saveMarkerLocation: (e: FormattedData, lat?: number, lng?: number) => Observable<any>;
    savePolygonLocation: (e: FormattedData, coordinates?: Array<any>) => Observable<any>;
    translateService: TranslateService;
    tooltipInstances: ITooltipsterInstance[];
    clusteringSettings: MarkerClusterGroupOptions;
    protected constructor(ctx: WidgetContext, $container: HTMLElement, options: WidgetUnitedMapSettings);
    private initMarkerClusterSettings;
    private selectEntityWithoutLocationDialog;
    private selectEntityWithoutLocation;
    private toggleDrawMode;
    addEditControl(): void;
    setLoading(loading: boolean): void;
    setMap(map: L.Map): void;
    private createdControlButtonTooltip;
    createLatLng(lat: number, lng: number): L.LatLng;
    createBounds(): L.LatLngBounds;
    extendBounds(bounds: L.LatLngBounds, polyline: L.Polyline): void;
    invalidateSize(): void;
    onResize(): void;
    getCenter(): L.LatLng;
    fitBounds(bounds: LatLngBounds, padding?: LatLngTuple): void;
    convertPosition(expression: object): L.LatLng;
    convertPositionPolygon(expression: (LatLngTuple | LatLngTuple[] | LatLngTuple[][])[]): any;
    convertToCustomFormat(position: L.LatLng, offset?: number): object;
    convertToPolygonFormat(points: Array<any>): Array<any>;
    convertPolygonToCustomFormat(expression: any[][]): {
        [key: string]: any;
    };
    updateData(drawRoutes: boolean): void;
    updateFromData(drawRoutes: boolean, formattedData: FormattedData[], polyData: FormattedData[][], markerClickCallback?: any): void;
    private updateBoundsInternal;
    updateMarkers(markersData: FormattedData[], updateBounds?: boolean, callback?: any): void;
    dragMarker: (e: any, data?: FormattedData) => void;
    private createMarker;
    private updateMarker;
    deleteMarker(key: string): Marker;
    deletePolygon(key: string): L.Polygon<any>;
    updatePoints(pointsData: FormattedData[][], getTooltip: (point: FormattedData, points: FormattedData[]) => string): void;
    updatePolylines(polyData: FormattedData[][], dsData: FormattedData[], updateBounds?: boolean): void;
    createPolyline(data: FormattedData, tsData: FormattedData[], dsData: FormattedData[], settings: Partial<WidgetPolylineSettings>, updateBounds?: boolean): void;
    updatePolyline(data: FormattedData, tsData: FormattedData[], dsData: FormattedData[], settings: Partial<WidgetPolylineSettings>, updateBounds?: boolean): void;
    removePolyline(name: string): void;
    isValidPolygonPosition(data: FormattedData): boolean;
    updatePolygons(polyData: FormattedData[], updateBounds?: boolean): void;
    dragPolygonVertex: (e?: any, data?: FormattedData) => void;
    createPolygon(polyData: FormattedData, dataSources: FormattedData[], settings: Partial<WidgetPolygonSettings>, updateBounds?: boolean, snappable?: boolean): void;
    updatePolygon(polyData: FormattedData, dataSources: FormattedData[], settings: Partial<WidgetPolygonSettings>, updateBounds?: boolean): void;
    removePolygon(name: string): void;
    remove(): void;
    isValidCircle(data: FormattedData): boolean;
    convertCircleToCustomFormat(expression: L.LatLng, radius: number): {
        [key: string]: CircleData;
    };
    convertToCircleFormat(circle: CircleData): CircleData;
    dragCircleVertex: (e?: any, data?: FormattedData) => void;
    updateCircle(circlesData: FormattedData[], updateBounds?: boolean): void;
    updatedCircle(data: FormattedData, dataSources: FormattedData[], updateBounds?: boolean): void;
    createdCircle(data: FormattedData, dataSources: FormattedData[], updateBounds?: boolean): void;
    removeCircle(name: string): void;
}
