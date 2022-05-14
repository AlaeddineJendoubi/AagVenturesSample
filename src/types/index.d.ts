
type FilterOrderASC = 'ASC'
type FilterOrderDESC = 'DESC'
type FilterOrder = FilterOrderASC | FilterOrderDESC
export interface FilterOptions {
    key: string,
    order: FilterOrder
}

