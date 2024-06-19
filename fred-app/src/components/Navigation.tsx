import React from 'react';
import { NavigationContainer, NavigationProp, ParamListBase } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import ChatScreen from '../pages/ChatScreen';
import QAScreen from '../pages/QAScreen';
import CameraScreen from '../pages/CameraScreen';
import AboutUsScreen from '../pages/AboutUsScreen';

export type ScreenNames = ['Home', 'Chat', 'Q&A', 'Camera', 'AboutUs'];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
                <Stack.Screen name="Q&A" component={QAScreen} />
                <Stack.Screen name="Camera" component={CameraScreen} />
                <Stack.Screen name="AboutUs" component={AboutUsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;