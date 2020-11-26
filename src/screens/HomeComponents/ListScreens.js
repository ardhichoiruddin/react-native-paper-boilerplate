import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { globalStyle } from '../../styles/globalStyles'

const ListScreens = () => {

    useEffect(() =>{
        console.log("Runnn!!!!!")
    },[])

    return (
        <View style={globalStyle.container}>
            <Text>Hello</Text>
        </View>
    )
}

ListScreens.options = {
    topBar: {
        title: {
            text: 'Filter List'
        }
    },
    bottomTab: {
        text: 'Filter List'
    }
}

export default ListScreens
