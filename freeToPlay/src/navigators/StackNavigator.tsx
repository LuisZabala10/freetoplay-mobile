import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

export type RootStack = {
    Home: undefined,
    Details: undefined
}

const Stack = createStackNavigator<RootStack>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle:{
            backgroundColor: '#2F3A8F'
        }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
