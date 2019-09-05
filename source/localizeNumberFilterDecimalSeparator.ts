import { NumberFilter } from 'ag-grid-community';

/** Replaces a comma in the number filter input text with a dot. Therefore both a comma and a dot are supported as a decimal separator. */
export function localizeNumberFilterDecimalSeparator() {
    const stringToFloat = (value: string): number | null => {
        let filterText = value || null;
        if (filterText && filterText.trim() === '') {
            filterText = null;
        }
        let newFilter: number | null;
        if (filterText !== null && filterText !== undefined) {
            filterText = filterText.replace(',', '.');
            newFilter = parseFloat(filterText);
        } else {
            newFilter = null;
        }
        return newFilter;
    };

    // tslint:disable-next-line:no-string-literal
    NumberFilter.prototype['stringToFloat'] = stringToFloat;
}