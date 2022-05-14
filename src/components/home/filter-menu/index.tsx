import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { IconButton } from 'react-native-paper'
import { isNil } from 'lodash'
import { updateFilterdDataAction } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
export const FilterMenu = (props: any) => {
    const [selectedButton, setSelectedButton] = useState(null)
    // data state init
    const data = useSelector((state) => state?.apiData?.data)
    // init dispatch
    const dispatch = useDispatch()

    // data filtering state management on fitler option updated
    useEffect(() => {
        if (!isNil(props?.filterOption?.key) && !isNil(props?.filterOption?.order)) {
            dispatch(updateFilterdDataAction(props?.loadingState, props?.filterOption, data))
        }
    }, [props?.filterOption])



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
                    style={{ backgroundColor: selectedButton?.nameASC ? 'grey' : 'white' }}
                    size={20}
                    onPress={() => {
                        setSelectedButton({ nameASC: !selectedButton?.nameASC })
                        props?.setFilterOption({ key: 'name', order: 'ASC' })
                    }}
                />
                <Text >
                    Name
                </Text>
                <IconButton
                    icon="arrow-down-thin"
                    style={{ backgroundColor: selectedButton?.nameDESC ? 'grey' : 'white' }}
                    color={'black'}
                    size={20}
                    onPress={() => {
                        setSelectedButton({ nameDESC: !selectedButton?.nameDESC })

                        props?.setFilterOption({ key: 'name', order: 'DESC' })
                    }}
                />

            </View>
            {/* Filter by Current price  */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text >
                    Current Price
                </Text>
                <IconButton
                    icon="arrow-up-thin"
                    style={{ backgroundColor: selectedButton?.currentPriceASC ? 'grey' : 'white' }}
                    color={'black'}
                    size={20}
                    onPress={() => {
                        setSelectedButton({ currentPriceASC: !selectedButton?.currentPriceASC })
                        props?.setFilterOption({ key: 'current_price', order: 'ASC' })
                    }}
                />
                <Text >
                    Current Price
                </Text>
                <IconButton
                    icon="arrow-down-thin"
                    style={{ backgroundColor: selectedButton?.currentPriceDESC ? 'grey' : 'white' }}

                    color={'black'}
                    size={20}
                    onPress={() => {
                        setSelectedButton({ currentPriceDESC: !selectedButton?.currentPriceDESC })
                        props?.setFilterOption({ key: 'current_price', order: 'DESC' })
                    }}
                />
            </View>
            {/* Filter by Ath date  */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text >
                    Ath date
                </Text>
                <IconButton
                    icon="arrow-up-thin"
                    style={{ backgroundColor: selectedButton?.athDateASC ? 'grey' : 'white' }}

                    color={'black'}
                    size={20}
                    onPress={() => {
                        setSelectedButton({ athDateASC: !selectedButton?.athDateASC })
                        props?.setFilterOption({ key: 'ath', order: 'ASC' })
                    }}
                />
                <Text >
                    Ath date
                </Text>
                <IconButton
                    icon="arrow-down-thin"
                    style={{ backgroundColor: selectedButton?.athDateDESC ? 'grey' : 'white' }}

                    color={'black'}
                    size={20}
                    onPress={() => {
                        setSelectedButton({ athDateDESC: !selectedButton?.athDateDESC })
                        props?.setFilterOption({ key: 'ath', order: 'DESC' })
                    }}
                />
            </View>
        </View>
    )
}