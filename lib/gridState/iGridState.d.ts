import { ColumnState } from 'ag-grid-community/dist/lib/columnController/columnController';
/** Represents retrieved ag-grid state: its columns, sorting and filtering */
export interface IGridState {
    columnState: ColumnState[];
    columnGroupState: any[];
    sortModel: any[];
    filterModel: any;
}
