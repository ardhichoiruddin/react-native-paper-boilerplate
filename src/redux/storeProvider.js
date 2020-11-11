import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './store'

const {store, persistor} = configureStore()

export const storeProvider = (Component) => (props: any) =>  (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Component {...props}/>
        </PersistGate>
    </Provider>
)

