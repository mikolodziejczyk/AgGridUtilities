"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = require("ag-grid-community");
/** Replaces a comma in the number filter input text with a dot. Therefore both a comma and a dot are supported as a decimal separator. */
function localizeNumberFilterDecimalSeparator() {
    var stringToFloat = function (value) {
        var filterText = value || null;
        if (filterText && filterText.trim() === '') {
            filterText = null;
        }
        var newFilter;
        if (filterText !== null && filterText !== undefined) {
            filterText = filterText.replace(',', '.');
            newFilter = parseFloat(filterText);
        }
        else {
            newFilter = null;
        }
        return newFilter;
    };
    // tslint:disable-next-line:no-string-literal
    ag_grid_community_1.NumberFilter.prototype['stringToFloat'] = stringToFloat;
}
exports.localizeNumberFilterDecimalSeparator = localizeNumberFilterDecimalSeparator;
//# sourceMappingURL=localizeNumberFilterDecimalSeparator.js.map