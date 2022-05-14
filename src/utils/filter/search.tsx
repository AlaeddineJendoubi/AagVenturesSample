import { filter } from 'lodash'
import { FilterOptions } from '../../types'

/**
 * Search for item in data if data.name or data.symbol is similar to searched input
 * @prop {string}  searched search input
 * @prop {Function}  onFailure function triggered on failirue 
 * @return {void}
 */
export const searchCrypto = (searched: any, data: any) => {
    return filter(data, (dataItem: any) => {
        return dataItem?.name?.toString()?.toLowerCase()?.includes(searched?.toLowerCase())
            || dataItem?.symbol?.toString()?.toLowerCase()?.includes(searched?.toLowerCase())
    })
}

/**
 * Filters data by key and order
 * @prop {FilterOptions}  filterOption search input
 * @prop {object}  data function triggered on failirue 
 * @return {void}
 */
export const filterDataByKey = (filterOption: FilterOptions, data: any) => {
    return data?.sort(function (a: any, b: any) {
        if (filterOption?.order === 'ASC') {
            console.log('is asc', a[filterOption?.key])
            if (a[filterOption?.key] < b[filterOption?.key]) {
                return -1;
            }
            if (a[filterOption?.key] > b[filterOption?.key]) {
                return 1;
            }
            return 0;
        } else {
            if (a[filterOption?.key] < b[filterOption?.key]) {
                return 1;
            }
            if (a[filterOption?.key] > b[filterOption?.key]) {
                return -1;
            }
            return 0;
        }
    })
}