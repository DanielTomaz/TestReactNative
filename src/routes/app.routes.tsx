import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components';


import  ListPositions  from '../pages/ListPositions';
import  SetPosition  from '../pages/SetPosition';

 
const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){
    const theme = useTheme();

    return(
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: '#f4c67c',
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle:    {
                    backgroundColor: '#2f6690',  
                    height: 60,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                },
            }}
        >
            <Screen 
                name="SetPosition"
                component={SetPosition}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Entypo name="location" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Screen 
                name="ListPositions"
                component={ListPositions}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Entypo name="list" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Navigator>
    );
}
