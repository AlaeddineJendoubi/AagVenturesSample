import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from "react-redux";
import { DataListItems } from "./data-list-item/item";
import { isNil } from 'lodash'
import { fetchDataFromApiAction } from "../../redux/actions";
import { SearchBar } from "./search-bar";
import { FilterMenu } from "./filter-menu";
export const Home = (props) => {
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
    console.log(isNil(searchResult) ? data : searchResult)

    return (
        <View style={styles?.mainContainer}>
            {/* Search bar component */}
            <SearchBar data={data} searchResult={searchResult} setSearchResult={setSearchResult} />
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

            {isFilterMenuVisible ? <FilterMenu loadingState={setIsDataLoading} /> : null}
            {/* Data List */}

            <FlatList
                contentContainerStyle={{ alignItems: 'center' }}
                data={
                    isNil(searchResult) ? data : searchResult
                }
                renderItem={DataListItems}
                keyExtractor={(item) => item.id.toString()}
                onRefresh={() => {
                    dispatch(fetchDataFromApiAction(setIsDataLoading, (message) => { alert('Caught error while fetching', message) }))
                }}
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