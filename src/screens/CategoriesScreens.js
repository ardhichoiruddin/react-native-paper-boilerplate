import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CategoriesScreens = () => {
    return (
        <View style={styles.container}>
            <Text>Hello Categories</Text>
        </View>
    )
}

CategoriesScreens.options = {
    topBar: {
        title: {
            text: 'Categories'
        }
    },
    bottomTab: {
        text: 'Categories'
    }
}

export default CategoriesScreens

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20
    }
})
