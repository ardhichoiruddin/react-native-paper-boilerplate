import { Navigation } from 'react-native-navigation'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { storeProvider } from '../storeProvider'

import HomeScreens from '@screen/HomeScreens'
import ProfilScreens from '@screen/ProfilScreens'
import NotificationScreens from '@screen/NotificationScreens'
import CategoriesScreens from '@screen/CategoriesScreens'
import ListScreens from '@screen/HomeComponents/ListScreens'


export const registerRoute = () => {
    const Screens = new Map()

    Screens.set('Home', HomeScreens)
    Screens.set('Profil', ProfilScreens)
    Screens.set('Notification', NotificationScreens)
    Screens.set('Categories', CategoriesScreens)
    Screens.set('List', ListScreens)

    Screens.forEach((C, key) => {
        Navigation.registerComponent(key, () => gestureHandlerRootHOC(storeProvider(C)), () => C)
    })
}