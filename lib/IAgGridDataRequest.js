"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrepareAgGridDataRequest = void 0;
function PrepareAgGridDataRequest(params, globalFilter) {
    var r = {
        startRow: params.startRow,
        endRow: params.endRow,
        sortModel: params.sortModel,
        filterModel: params.filterModel,
        // tslint:disable-next-line:object-literal-shorthand
        globalFilter: globalFilter
    };
    return r;
}
exports.PrepareAgGridDataRequest = PrepareAgGridDataRequest;
//# sourceMappingURL=IAgGridDataRequest.js.map