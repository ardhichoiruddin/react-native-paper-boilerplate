import React, { useEffect, useState } from 'react'
import { Navigation } from 'react-native-navigation'
import { View, Text, StyleSheet, TouchableHighlight, FlatList } from 'react-native'
import { connect } from 'react-redux'

const NotificationScreens = ({ token, componentId }) => {

    const [data, setData] = useState(null)

    const getData = async() => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => {
                    res.json().then(dt => setData(dt))
                })
                .catch(err => {
                    console.log(err)
                })
    }

    const renderItem = (items) => {
        const {item } = items
        return(
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 6 }}>
                <Text>{item.title}</Text>
            </View>
        )
    }

    useEffect(() => {

        const listener = {
            componentDidAppear: () => {
                getData()
            },
            componentDidDisappear: () => {
                setData(null)
            }
        }
        const unsubscribe = Navigation.events().registerComponentListener(listener, componentId);
        return () => {
            unsubscribe.remove();
        };
      
    },[])
    
    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.button}
                onPress={() => {}}
                underlayColor="#003f88"
            >
                <Text style={styles.buttonText}>Show token</Text>
            </TouchableHighlight>
            <Text>{token}</Text>

            <FlatList
                style={{
                    flexGrow: 1,
                }}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

NotificationScreens.options = {
    topBar: {
        title: {
            text: 'Notification'
        }
    },
    bottomTab: {
        text: 'Notification'
    }
}

const mapStateToProps = (state) => {
    return{
        token: state.token.token
    }
}


export default connect(mapStateToProps)(NotificationScreens)


const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    button: {
        backgroundColor: '#00509d',
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

