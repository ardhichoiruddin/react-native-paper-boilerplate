import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native'
import { useDispatch } from 'react-redux'
import { Navigation } from 'react-native-navigation'
import { Button } from 'react-native-paper'
import { apply } from 'osmicsx'

import { SAVE_TOKEN } from '@modules/account/types'

const HomeScreens = ({ componentId }) => {

    const dispatch = useDispatch()

    const [text, setText] = useState(null)

    const tokenHandler = () => {
        dispatch({ type: SAVE_TOKEN, token: text })
        setText(null)
    }

    return (
        <View style={apply("px-4 py-4")}>
            <TextInput
                style={styles.textInput}
                placeholder="write token"
                onChangeText={text => setText(text)}
                value={text}
            />
            <TouchableHighlight
                style={styles.button}
                onPress={tokenHandler}
                underlayColor="#d62828"
            >
                <Text style={styles.buttonText}>Save token</Text>
            </TouchableHighlight>
            <Button
                style={{
                    marginTop: 20
                }}
                icon="add-shopping-cart"
                mode="contained"
                onPress={() => {
                    Navigation.push(componentId, {
                        component: {
                            name: 'List'
                        },
                        options: {
                            topBar: {
                                title: {
                                    text: 'List'
                                }
                            }
                        }
                    })
                }}>
                Go to Lists
            </Button>
        </View>
    )
}

HomeScreens.options = {
    topBar: {
        title: {
            text: 'Home'
        }
    },
    bottomTab: {
        text: 'Home'
    }
}


export default HomeScreens


const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'red',
        borderColor: '#6c757d',
        padding: 10,
        borderRadius: 6
    },
    button: {
        backgroundColor: '#e63946',
        paddingVertical: 16,
        paddingHorizontal: 14,
        borderRadius: 6,
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    }
})
