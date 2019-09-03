import { IGetRowsParams } from 'ag-grid-community';
/**
 * Represents an object sent to the server when requesting row data.
 * This is similar to IGetRowsParams but doesn't include functions and include globalFilter.
 */
export interface IAgGridDataRequest {
    startRow: number;
    endRow: number;
    sortModel: any;
    filterModel: any;
    globalFilter: string;
}
export declare function PrepareAgGridDataRequest(params: IGetRowsParams, globalFilter: string): IAgGridDataRequest;
