
/**
 * Resets and hides filter menu
 * @prop {Function}  setFilterOptions set filter option state manager
 * @prop {Function}  setIsFilterMenuVisible set filter menu  visibilty state manager
 * @prop {boolean}  isFilterMenuVisible is filter menu visible state 
 * @return {void}
 */
export const resetFilterMenu = (setFilterOptions:any, setIsFilterMenuVisible:any, isFilterMenuVisible:boolean) => {
    if (isFilterMenuVisible) {
        setIsFilterMenuVisible(false)
        setFilterOptions(null)
    } else {
        setFilterOptions(null)
    }
}