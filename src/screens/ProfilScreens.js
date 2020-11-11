import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ProfilScreens = () => {
    return (
        <View style={styles.container}>
            <Text>Hello, this is Profil</Text>
        </View>
    )
}

ProfilScreens.options = {
    topBar: {
        title: {
            text: 'Profil'
        }
    },
    bottomTab: {
        text: 'Profil'
    }
}

export default ProfilScreens

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20
    }
})
