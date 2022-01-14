import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import {GameResponse} from '../interface/gameResponse';

export type RootStack = {
  Home: undefined;
  Details: GameResponse;
};

const Stack = createStackNavigator<RootStack>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'rgb(28,31,42)',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen}  options={{
        cardStyle:{
          backgroundColor: 'rgb(28,31,42)'
        }
      }}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
