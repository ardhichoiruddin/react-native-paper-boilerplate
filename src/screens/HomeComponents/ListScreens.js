import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { List } from 'react-native-paper'
import { apply } from 'osmicsx'

import { globalStyle } from '../../styles/globalStyles'

const ListScreens = () => {

    useEffect(() => {
        console.log("Runnn!!!!!")
    }, [])

    return (
        <View style={[globalStyle.container, apply("flex bg-gray-800")]}>
            <List.Section>
                <List.Subheader style={apply("text-white")}>Some title</List.Subheader>
                <List.Item 
                    title="First Item" 
                    left={() => <List.Icon color="#fff" icon="folder" />} />
                <List.Item
                    title="Second Item"
                    left={() => <List.Icon color="#fff" icon="folder" />}
                />
            </List.Section>
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
