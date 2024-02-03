import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Entypo, MaterialIcons, Feather, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import HomePage from '../screen/HomePage';

const Navbar = ({ keyboardVisible , navigation }) => {
  return (
    <View style={[styles.container, { bottom: keyboardVisible ? -100 : 0 }]}>
      <View style={styles.IconBox}>
        <Pressable style={styles.s} 
            onPress={()=>{navigation.navigate('Home')}} >
          <Entypo name="home" size={24} color="black" />
        </Pressable>
        <Text>Home</Text>
      </View>

      <View style={styles.IconBox}>
        <Pressable style={styles.s} 
         onPress={()=>{navigation.navigate('Menu')}} >
          <Ionicons name="book-outline" size={24} color="black" />
        </Pressable>
        <Text>Books</Text>
      </View>

      <View style={styles.IconBox}>
        <Pressable style={styles.s} >
          <MaterialIcons name="favorite-border" size={24} color="black" />
        </Pressable>
        <Text>Favorites</Text>
      </View>

      <View style={styles.IconBox}>
        <Pressable style={styles.s} >
          <Feather name="user" size={24} color="black" />
        </Pressable>
        <Text>User</Text>
      </View>

      <View style={styles.IconBox}>
        <Pressable style={styles.s} >
          <SimpleLineIcons name="basket" size={24} color="black" />
        </Pressable>
        <Text>Basket</Text>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: 70,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fcfcfc',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  IconBox: {
    display: 'flex',
    alignItems: 'center',
    padding: 20,
  }
});


