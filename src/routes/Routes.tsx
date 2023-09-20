import React from "react";

import { RootStackParams } from "../types";
import Home from "../views/Home";
import Detail from "../views/Detail";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParams>();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Detail' component={Detail} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;