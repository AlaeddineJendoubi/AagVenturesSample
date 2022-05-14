import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { isNil } from 'lodash'
import { TextInput, HelperText } from 'react-native-paper';
import { searchCrypto } from "../../../utils/filter/search";
import { resetFilterMenu } from "../interface";



export const SearchBar = (props: any) => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        /**************Use debounce if we need to seach only when user stops writing****************************/
        // const delayDebounceFn = setTimeout(() => {
        //     if (searchQuery?.length > 0) {
        //         props?.setSearchResult(searchCrypto(searchQuery, props?.data))
        //     } else {
        //         props?.setSearchResult(null)
        //     }
        // }, 500)
        // return () => clearTimeout(delayDebounceFn)

        /***********************************************/
        // Reset filter menu
        resetFilterMenu(props?.setFilterOption,
            props?.setIsFilterMenuVisible,
            props?.isFilterMenuVisible
        )
        searchQuery?.length > 0 ?
            props?.setSearchResult(searchCrypto(searchQuery, props?.data))
            : props?.setSearchResult(null)

    }, [searchQuery])

    return (
        <View>
            {/* Text input component */}
            <TextInput
                label="Search crypto"
                mode='outlined'
                right={
                    <TextInput.Icon
                        name='magnify'
                    />
                }
                placeholder="Search"
                onChangeText={(text) => {
                    setSearchQuery(text)
                }}
                value={searchQuery}
            />
            {/* Text helper to display error/ info text under text input */}
            <HelperText
                type="error"
                visible={true}
            >
                {isNil(props?.searchResult)
                    ? 'Search for a crypto by name or symbol'
                    : props?.searchResult?.length === 0 ? 'We couldnt find what you are looking for'
                        : null}
            </HelperText>
        </View>
    )
}