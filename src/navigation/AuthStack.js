import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RegistrPage,SignInPage,StartPage } from '../screen/index.js'

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="StartPage"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Start" component={StartPage}/>
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="Registr" component={RegistrPage} />

    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})