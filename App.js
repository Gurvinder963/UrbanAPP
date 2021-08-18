import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstPage from './Home';
import SecondPage from './SalonList';
import ThirdPage from './ServiceDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: 'Urban Clap', //Set Header Title
            headerStyle: {
              backgroundColor: '#000', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="SalonList"
          component={SecondPage}
          
          options={{
            title: 'Salon at Home', //Set Header Title
            
            headerStyle: {
              backgroundColor: '#fff', //Set Header color
            },
            headerTintColor: '#666', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'normal', //Set Header text style
            },
          }}
        />

<Stack.Screen
          name="ServiceDetail"
          component={ThirdPage}
          
          options={{
            title: '', //Set Header Title
            
            headerStyle: {
              backgroundColor: '#fff', //Set Header color
            },
            headerTintColor: '#666', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'normal', //Set Header text style
            },
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;