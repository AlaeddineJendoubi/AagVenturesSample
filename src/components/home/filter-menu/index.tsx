import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { IconButton } from 'react-native-paper'
import { filterDataByKey } from '../../../utils/filter/search';
import { isNil } from 'lodash'
import { updateFilterdDataAction } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
export const FilterMenu = (props) => {
    // filter options state init and management 
    const [filterOption, setFilterOption] = useState({
        key: null,
        order: null
    })
    // data state init
    const data = useSelector((state) => state?.apiData?.data)
    // init dispatch
    const dispatch = useDispatch()

    // data filtering state management on fitler option updated
    useEffect(() => {
        if (!isNil(filterOption?.key) && !isNil(filterOption?.order)) {
            dispatch(updateFilterdDataAction(props?.loadingState, filterOption, data))
        }
    }, [filterOption])



    return (
        <View style={{ width: '100%' }}>
            {/* Filter by name  */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text >
                    Name
                </Text>
                <IconButton
                    icon="arrow-up-thin"
                    color={'black'}
                    style={{ backgroundColor: 'white' }}
                    size={20}
                    onPress={() => setFilterOption({ key: 'name', order: 'ASC' })}
                />
                <Text >
                    Name
                </Text>
                <IconButton
                    icon="arrow-down-thin"
                    style={{ backgroundColor: 'white' }}
                    color={'black'}
                    size={20}
                    onPress={() => setFilterOption({ key: 'name', order: 'DESC' })}
                />

            </View>
            {/* Filter by Current price  */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text >
                    Current Price
                </Text>
                <IconButton
                    icon="arrow-up-thin"
                    style={{ backgroundColor: 'white' }}
                    color={'black'}
                    size={20}
                    onPress={() => setFilterOption({ key: 'current_price', order: 'ASC' })}
                />
                <Text >
                    Current Price
                </Text>
                <IconButton
                    icon="arrow-down-thin"
                    style={{ backgroundColor: 'white' }}
                    color={'black'}
                    size={20}
                    onPress={() => setFilterOption({ key: 'current_price', order: 'DESC' })}
                />
            </View>
            {/* Filter by Ath date  */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text >
                    Ath date
                </Text>
                <IconButton
                    icon="arrow-up-thin"
                    style={{ backgroundColor: 'white' }}
                    color={'black'}
                    size={20}
                    onPress={() => setFilterOption({ key: 'ath', order: 'ASC' })}
                />
                <Text >
                    Ath date
                </Text>
                <IconButton
                    icon="arrow-down-thin"
                    style={{ backgroundColor: 'white' }}
                    color={'black'}
                    size={20}
                    onPress={() => setFilterOption({ key: 'ath', order: 'DESC' })}
                />
            </View>
        </View>
    )
}