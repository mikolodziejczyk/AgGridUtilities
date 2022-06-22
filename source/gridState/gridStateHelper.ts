import { GridApi, ColumnApi } from 'ag-grid-community';
import { IGridState } from './iGridState';

/** Provides methods for retrieving, applying and resettng the ag-grid settings (like columns, sort and filters) */
export class GridStateHelper {
    /** Retrieves the current grid state into IGridState */
    static getState(gridApi: GridApi, columnApi: ColumnApi): IGridState {
        const r: IGridState = {
            columnState: columnApi.getColumnState(),
            columnGroupState: columnApi.getColumnGroupState(),
            sortModel: [],  // gridApi.getSortModel(),
            filterModel: gridApi.getFilterModel()
        };

        return r;
    }

    /** Applies the saved settings from  IGridState into ag-grid */
    static setState(gridApi: GridApi, columnApi: ColumnApi, gridState: IGridState) {
        columnApi.setColumnState(gridState.columnState);
        columnApi.setColumnGroupState(gridState.columnGroupState);
        // gridApi.setSortModel(gridState.sortModel);
        gridApi.setFilterModel(gridState.filterModel);
    }

    /** Resets the ag-grid state to default (all columns visible in the initial order, no filtering and no sorting) */
    static resetState(gridApi: GridApi, columnApi: ColumnApi) {
        columnApi.resetColumnState();
        columnApi.resetColumnGroupState();
        // gridApi.setSortModel(null);
        gridApi.setFilterModel(null);
    }
}

