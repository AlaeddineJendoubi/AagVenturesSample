import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import FastImage from 'react-native-fast-image'



export const DataListItems = ({ item }) => {


    return (
        <View style={styles?.columnContainerStyle}>
            <View style={styles?.imageContainerStyle}>
                <FastImage
                    style={{ width: 100, height: 100 }}
                    source={{
                        uri: item?.image,

                        priority: FastImage.priority.high,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
            </View>
            <View style={styles?.informationContainerStyle} >
                <View style={styles?.informationRowStyle} >
                    <Text style={styles?.textTitleStyle}>
                        Crypto name :
                    </Text>
                    <Text style={styles?.textValueStyle}>
                        {item?.name}
                    </Text>
                </View>
                <View style={styles?.informationRowStyle} >
                    <Text style={styles?.textTitleStyle}>
                        Current price :
                    </Text>
                    <Text style={styles?.textValueStyle}>
                        {item?.current_price}
                    </Text>
                </View>
                <View style={styles?.informationRowStyle} >
                    <Text style={styles?.textTitleStyle}>
                        Ath :
                    </Text>
                    <Text style={styles?.textValueStyle}>
                        {item?.ath}
                    </Text>
                </View>
                <View style={styles?.informationRowStyle} >
                    <Text style={styles?.textTitleStyle}>
                        Symbo; :
                    </Text>
                    <Text style={styles?.textValueStyle}>
                        {item?.symbol}
                    </Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    columnContainerStyle: {
        height: 100,
        width: "95%",
        overflow: 'hidden',
        margin: 10,
        borderTopWidth: 0.5,
        borderRightWidth: 0.5,
        borderLeftWidth: 0.5,
        borderRadius: 9,
        borderColor: 'white',
        elevation: 7,
        flexDirection: 'row'
    },
    imageContainerStyle: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    informationContainerStyle: {
        width: '70%',
        flexDirection: 'column',
        alignContent: 'center'
    },
    informationRowStyle: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-start'
    },
    textTitleStyle: {
        fontFamily: 'ArialHebrew-Bold',
        fontSize: 16,
        color: 'blue',
        textShadowColor: 'black',
        textShadowOffset: { width: -0.5, height: 0.5 },
        textShadowRadius: 1,

        alignSelf: 'center'

    },
    textValueStyle: {
        fontFamily: 'ArialHebrew',
        fontSize: 14,
        color: 'black',
        marginLeft: '5%',
        textAlign: 'center',
        alignSelf: 'center'
    },

})