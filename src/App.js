
import { Navigation } from 'react-native-navigation'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { mainRoot } from './routes'
import { storeProvider } from './redux/storeProvider'

import HomeScreens from './screens/HomeScreens'
import ProfilScreens from './screens/ProfilScreens'
import NotificationScreens from './screens/NotificationScreens'
import CategoriesScreens from './screens/CategoriesScreens'

const Screens = new Map()

Screens.set('Home', HomeScreens)
Screens.set('Profil', ProfilScreens)
Screens.set('Notification', NotificationScreens)
Screens.set('Categories', CategoriesScreens)

Screens.forEach((C, key) => {
    Navigation.registerComponent(key, () => gestureHandlerRootHOC(storeProvider(C)), () => C)
})

export const startApp = () => {
    Promise.all([
        Icon.getImageSource("home"),
        Icon.getImageSource("account-circle"),
        Icon.getImageSource("notifications"),
        Icon.getImageSource("category")
    ]).then(icon => {
        Navigation.setRoot(mainRoot(icon))
    })

}
