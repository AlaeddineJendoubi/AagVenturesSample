import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from "react-redux";
import { DataListItems } from "./data-list-item/item";
import { isNil } from 'lodash'
import { fetchDataFromApiAction } from "../../redux/actions";
import { SearchBar } from "./search-bar";
import { FilterMenu } from "./filter-menu";
import { resetFilterMenu } from "./interface";

export const Home = () => {
    // init dispatch 
    const dispatch = useDispatch()
    // init state 
    const data = useSelector((state) => state?.apiData?.data)
    // is data loading state management 
    const [isDataLoading, setIsDataLoading] = useState(false)
    // search result data
    const [searchResult, setSearchResult] = useState(null)
    // filter menu visibility management 
    const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false)
    // filter options state init and management 
    const [filterOption, setFilterOption] = useState({
        key: null,
        order: null
    })
    // Data refresh state
    const [refreshData, setRefreshData] = useState(false)

    // data fetch management 
    useEffect(() => {
        isNil(data) // if data not fetched fetch
            ? dispatch(
                fetchDataFromApiAction(setIsDataLoading,
                    (message) => {
                        alert('Caught error while fetching', message)
                    }
                ))
            : null
    }, [])



    // Changes the value of refresh data each time fitler option changes to force a re-render of the flatList
    useEffect(() => {
        setRefreshData(!refreshData)
    }, [filterOption])


    return (
        <View style={styles?.mainContainer}>
            {/* Search bar component */}
            <SearchBar
                data={data}
                searchResult={searchResult}
                setSearchResult={setSearchResult}
                setFilterOption={setFilterOption}
                setIsFilterMenuVisible={setIsFilterMenuVisible}
                isFilterMenuVisible={isFilterMenuVisible}
            />
            {/* Display filter menu Button */}
            <View style={styles?.filterDataContainerStyle}>
                <IconButton
                    icon="align-horizontal-right"
                    size={20}
                    onPress={() => setIsFilterMenuVisible(!isFilterMenuVisible)}
                    style={{ alignSelf: 'flex-end', backgroundColor: 'white' }}
                />
                <Text>
                    Filter data
                </Text>
            </View>
            {/* Filter menu component */}
            {isFilterMenuVisible
                ? <FilterMenu
                    loadingState={setIsDataLoading}
                    filterOption={filterOption}
                    setFilterOption={setFilterOption}
                /> : null}
            {/* Data List */}
            <FlatList
                contentContainerStyle={{ alignItems: 'center' }}
                data={
                    isNil(searchResult) ? data : searchResult
                }
                renderItem={DataListItems}
                keyExtractor={(item) => item.id.toString()}
                onRefresh={() => {
                    // Refetchs data from the api
                    dispatch(fetchDataFromApiAction(setIsDataLoading, (message) => { alert('Caught error while fetching', message) }))
                    // Reset and hide filte rmenu
                    resetFilterMenu(setFilterOption, setIsFilterMenuVisible, setIsFilterMenuVisible)
                }}
                // Forces Flat list re-render when data changes
                extraData={refreshData}
                refreshing={isDataLoading}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '95%',
    },
    filterDataContainerStyle: {
        flexDirection: 'row-reverse',
        alignItems: 'center'
    }
});