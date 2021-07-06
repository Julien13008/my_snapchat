import React from 'react';
import { SafeAreaView, Text, View, Button, Alert, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inscription from './view/Inscription';
import Home from './view/Home';
import tailwind from 'tailwind-rn';
import Connection from './view/Connection';

const Stack = createStackNavigator();
class App extends React.Component {


  render() {
    const styles = StyleSheet.create({
      backgroundColor: {
        backgroundColor: '#fff200',
      }
    })
  
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
          />

        <Stack.Screen
            name="Inscription"
            component={Inscription}
          />  

        <Stack.Screen
            name="Connection"
            component={Connection}
          />  
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

export default App;