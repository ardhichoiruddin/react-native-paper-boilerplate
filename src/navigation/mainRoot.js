import { Navigation } from 'react-native-navigation'


export const mainRoot = (icon) => {
    return {
        root: {
            bottomTabs: {
                options: {
                    bottomTabs: {
                        titleDisplayMode: 'showWhenActiveForce',
                    },
                },
                children: [
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'Home',
                                    }
                                },
                            ],
                            options: {
                                bottomTab: {
                                    icon: icon[0],
                                    selectedIconColor: '#4d089a'
                                },
                            },
                        }
                    },
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'Notification'
                                    }
                                }
                            ],
                            options: {
                                bottomTab: {
                                    icon: icon[2]
                                },
                            },
                        }
                    },
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'Categories'
                                    }
                                }
                            ],
                            options: {
                                bottomTab: {
                                    icon: icon[3]
                                },
                            },
                        }
                    },
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'Profil'
                                    }
                                }
                            ],
                            options: {
                                bottomTab: {
                                    icon: icon[1]
                                },
                            },
                        }
                    }
                ]
            }
        }
    }
};

Navigation.setDefaultOptions({
    statusBar: {
        backgroundColor: '#4d089a'
    },
    topBar: {
        title: {
            color: 'white'
        },
        backButton: {
            color: 'white'
        },
        background: {
            color: '#4d089a'
        }
    },
    bottomTab: {
        fontSize: 8,
        selectedFontSize: 10,
        iconColor: '#adb5bd',
        selectedIconColor: '#4d089a'
    }
});
