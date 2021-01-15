
import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { mainRoot } from '@navigation/mainRoot'
import { registerRoute } from '@navigation/registerRoute'

registerRoute()

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
