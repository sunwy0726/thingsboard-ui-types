import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { EntitySubtype } from '@app/shared/models/entity-type.models';
import { Asset, AssetInfo, AssetSearchQuery } from '@app/shared/models/asset.models';
import { BulkImportRequest, BulkImportResult } from '@home/components/import-export/import-export.models';
import * as i0 from "@angular/core";
export declare class AssetService {
    private http;
    constructor(http: HttpClient);
    getTenantAssetInfos(pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<AssetInfo>>;
    getTenantAssetInfosByAssetProfileId(pageLink: PageLink, assetProfileId?: string, config?: RequestConfig): Observable<PageData<AssetInfo>>;
    getCustomerAssetInfos(customerId: string, pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<AssetInfo>>;
    getCustomerAssetInfosByAssetProfileId(customerId: string, pageLink: PageLink, assetProfileId?: string, config?: RequestConfig): Observable<PageData<AssetInfo>>;
    getAsset(assetId: string, config?: RequestConfig): Observable<Asset>;
    getAssets(assetIds: Array<string>, config?: RequestConfig): Observable<Array<Asset>>;
    getAssetInfo(assetId: string, config?: RequestConfig): Observable<AssetInfo>;
    saveAsset(asset: Asset, config?: RequestConfig): Observable<Asset>;
    deleteAsset(assetId: string, config?: RequestConfig): Observable<Object>;
    getAssetTypes(config?: RequestConfig): Observable<Array<EntitySubtype>>;
    makeAssetPublic(assetId: string, config?: RequestConfig): Observable<Asset>;
    assignAssetToCustomer(customerId: string, assetId: string, config?: RequestConfig): Observable<Asset>;
    unassignAssetFromCustomer(assetId: string, config?: RequestConfig): Observable<Object>;
    findByQuery(query: AssetSearchQuery, config?: RequestConfig): Observable<Array<Asset>>;
    findByName(assetName: string, config?: RequestConfig): Observable<Asset>;
    assignAssetToEdge(edgeId: string, assetId: string, config?: RequestConfig): Observable<Asset>;
    unassignAssetFromEdge(edgeId: string, assetId: string, config?: RequestConfig): Observable<Object>;
    getEdgeAssets(edgeId: string, pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<AssetInfo>>;
    bulkImportAssets(entitiesData: BulkImportRequest, config?: RequestConfig): Observable<BulkImportResult>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AssetService>;
}
