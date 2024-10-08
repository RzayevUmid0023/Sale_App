import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomePage , MenuPage } from '../screen/index';

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
const UserStack = () => {
  return (
    <Stack.Navigator  
        initialRouteName="HomePage"
        screenOptions={{headerShown: false}}>

        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='Menu' component={MenuPage} />


    </Stack.Navigator>
  )
}

export default UserStack

const styles = StyleSheet.create({})