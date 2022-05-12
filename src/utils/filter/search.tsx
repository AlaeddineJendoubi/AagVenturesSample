import { filter } from 'lodash'

export const searchCrypto = (searched, data) => {
    return filter(data, (dataItem) => {
        return dataItem?.name?.toString()?.toLowerCase()?.includes(searched?.toLowerCase()) || dataItem?.symbol?.toString()?.toLowerCase()?.includes(searched?.toLowerCase())
    })
}


const sortByNameAsc = (a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

const sortByNameDesc = (a, b) => {
    if (a.name < b.name) {
        return 1;
    }
    if (a.name > b.name) {
        return -1;
    }
    return 0;
}


const sortCurrentPriceAsc = (a, b) => {
    if (a.current_price < b.current_price) {
        return -1;
    }
    if (a.current_price > b.current_price) {
        return 1;
    }
    return 0;
}

const sortByCurrentPriceDesc = (a, b) => {
    if (a.current_price < b.current_price) {
        return 1;
    }
    if (a.current_price > b.current_price) {
        return -1;
    }
    return 0;
}


const sortAthDateAsc = (a, b) => {
    if (a.ath_date < b.ath_date) {
        return -1;
    }
    if (a.ath_date > b.ath_date) {
        return 1;
    }
    return 0;
}

const sortByAthDateDesc = (a, b) => {
    if (a.ath_date < b.ath_date) {
        return 1;
    }
    if (a.ath_date > b.ath_date) {
        return -1;
    }
    return 0;
}


export const filterDataByKey = (filter, data) => {

    if (filter?.key === 'name') {
        if (filter?.order === 'ASC') {
            return data?.sort(sortByNameAsc)
        } else {
            return data?.sort(sortByNameDesc)
        }
    }
    if (filter?.key === 'current_price') {
        if (filter?.order === 'ASC') {
            return data?.sort(sortCurrentPriceAsc)
        } else {
            return data?.sort(sortByCurrentPriceDesc)
        }
    }
    if (filter?.key === 'ath') {
        if (filter?.order === 'ASC') {
            return data?.sort(sortAthDateAsc)
        } else {
            return data?.sort(sortByAthDateDesc)
        }
    }
}