import { FilterOptions } from './../../../types/index.d';


import { SET_DATA } from "./data-actions-types";
import axios from 'axios'
import { filterDataByKey } from "../../../utils/filter/search";


/**
 * Fetch data from api 
 * @prop {Function}  loadingStatus Loading status state manager
 * @prop {Function}  onFailure function triggered on failirue 
 * @return {void}
 */
export const fetchDataFromApiAction =
    (loadingStatus: any, onFailure: any) => async (dispatch: any) => {
        // set lodaing status to true 
        loadingStatus(true)
        try {
            const apiResponse = await axios?.get('https://aag-price-api-dev.herokuapp.com/market-data-prices?page=1&provider=coingecko')
            if (apiResponse?.status === 200) {
                dispatch({
                    type: SET_DATA,
                    payload: apiResponse?.data
                })
                loadingStatus(false)
            }
        } catch (error) {
            onFailure(error)
            loadingStatus(false)
        }
    };


/**
* Fetch data from api 
* @prop {Function}  loadingStatus Loading status state manager
* @prop {FilterOptions}  filter filter option object 
* @prop {any}  data data to be filtered  
* @return {void}
*/
export const updateFilterdDataAction = (loadingStatus: any, filter: FilterOptions, data: any) => async (dispatch: any) => {
    loadingStatus(true)
    try {
        dispatch({
            type: SET_DATA,
            payload: filterDataByKey(filter, data)
        })

        loadingStatus(false)
    } catch (error) {
        loadingStatus(false)
        console.log('got error while filtering data', error)
    }
}