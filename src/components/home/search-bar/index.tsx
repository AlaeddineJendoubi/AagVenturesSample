import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { isNil } from 'lodash'
import { TextInput, HelperText } from 'react-native-paper';
import { searchCrypto } from "../../../utils/filter/search";



export const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // // Use debounce if we need to seach only when user stops writing
        // const delayDebounceFn = setTimeout(() => {
        //     if (searchQuery?.length > 0) {
        //         props?.setSearchResult(searchCrypto(searchQuery, props?.data))
        //     } else {
        //         props?.setSearchResult(null)
        //     }
        // }, 500)
        // return () => clearTimeout(delayDebounceFn)

        if (searchQuery?.length > 0) {
            props?.setSearchResult(searchCrypto(searchQuery, props?.data))
        } else {
            props?.setSearchResult(null)
        }
    }, [searchQuery])

    return (
        <View>
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