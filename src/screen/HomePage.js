import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable ,Keyboard} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TopImage1 } from '../../assets/Image';
import { FontAwesome } from '@expo/vector-icons';
import { CustomTextInput, Navbar } from '../components/ComponentIndex';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.header_box}>
        <ImageBackground source={TopImage1} style={styles.TopImageBackground}>
          <Text style={styles.header_text}>Covosh</Text>
          <View style={styles.header_box_child}>
            <Text style={styles.Text}>Good morning, user</Text>
            <FontAwesome name="bell" size={34} color="white" style={styles.Top_icon} />
          </View>
        </ImageBackground>
      </View>
      
      <View style={styles.Search_box}>
        <CustomTextInput setPlaceholder='Search' />
        <Pressable style={styles.search_button} onPress={() => { alert('deneme asamasinda') }}>
          <FontAwesome name="search" size={24} color="white" style={styles.search_icon} />
        </Pressable>
      </View>

      <Navbar keyboardVisible={keyboardVisible} navigation={navigation} />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  header_box: {
    width: '100%',
    height: 200,
    display: 'flex',
  },
  TopImageBackground: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden'
  },
  header_text: {
    marginTop: 40,
    textAlign: 'center',
    color: 'red',
    fontStyle: 'italic',
    fontSize: 23
  },
  header_box_child: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  Text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20
  },
  Top_icon: {
    marginRight: 20
  },
  Search_box: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    top: -35
  },
  search_icon: {
    borderRadius: 50,
    padding: 13,
    backgroundColor: 'red'
  },
  search_button: {
    position: 'absolute',
    right: '7%',
    top: 10,
  }
});

export default HomePage;
