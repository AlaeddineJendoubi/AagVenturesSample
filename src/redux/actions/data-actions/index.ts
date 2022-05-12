import { filter } from 'lodash';
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
    (loadingStatus, onFailure) => async (dispatch) => {
        // set lodaing status to true 
        loadingStatus(true)
        try {
            // fetch data from api 
            axios.get('https://aag-price-api-dev.herokuapp.com/market-data-prices?page=1&provider=coingecko').then((response) => {
            // on success save data to state    
            if (response?.status === 200) {
                    dispatch({
                        type: SET_DATA,
                        payload: response?.data
                    })
                    loadingStatus(false)
                }
            }).catch((error) => {
                onFailure(error)
                loadingStatus(false)
            })
        } catch (error) {
            onFailure(error)
            loadingStatus(false)
        }

    };


    /**
 * Fetch data from api 
 * @prop {Function}  loadingStatus Loading status state manager
 * @prop {any}  filter filter option object 
 * @prop {any}  data data to be filtered  
 * @return {void}
 */
export const updateFilterdDataAction = (loadingStatus, filter, data) => async (dispatch) => {
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