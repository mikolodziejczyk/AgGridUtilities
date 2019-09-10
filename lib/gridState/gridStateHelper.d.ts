import { GridApi, ColumnApi } from 'ag-grid-community';
import { IGridState } from './iGridState';
/** Provides methods for retrieving, applying and resettng the ag-grid settings (like columns, sort and filters) */
export declare class GridStateHelper {
    /** Retrieves the current grid state into IGridState */
    static getState(gridApi: GridApi, columnApi: ColumnApi): IGridState;
    /** Applies the saved settings from  IGridState into ag-grid */
    static setState(gridApi: GridApi, columnApi: ColumnApi, gridState: IGridState): void;
    /** Resets the ag-grid state to default (all columns visible in the initial order, no filtering and no sorting) */
    static resetState(gridApi: GridApi, columnApi: ColumnApi): void;
}
