"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridStateHelper = void 0;
/** Provides methods for retrieving, applying and resettng the ag-grid settings (like columns, sort and filters) */
var GridStateHelper = /** @class */ (function () {
    function GridStateHelper() {
    }
    /** Retrieves the current grid state into IGridState */
    GridStateHelper.getState = function (gridApi, columnApi) {
        var r = {
            columnState: columnApi.getColumnState(),
            columnGroupState: columnApi.getColumnGroupState(),
            sortModel: [],
            filterModel: gridApi.getFilterModel()
        };
        return r;
    };
    /** Applies the saved settings from  IGridState into ag-grid */
    GridStateHelper.setState = function (gridApi, columnApi, gridState) {
        columnApi.setColumnState(gridState.columnState);
        columnApi.setColumnGroupState(gridState.columnGroupState);
        // gridApi.setSortModel(gridState.sortModel);
        gridApi.setFilterModel(gridState.filterModel);
    };
    /** Resets the ag-grid state to default (all columns visible in the initial order, no filtering and no sorting) */
    GridStateHelper.resetState = function (gridApi, columnApi) {
        columnApi.resetColumnState();
        columnApi.resetColumnGroupState();
        // gridApi.setSortModel(null);
        gridApi.setFilterModel(null);
    };
    return GridStateHelper;
}());
exports.GridStateHelper = GridStateHelper;
//# sourceMappingURL=gridStateHelper.js.map