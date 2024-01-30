import { StyleSheet, Text, View, ImageBackground, Pressable, ScrollView } from 'react-native'
import React from 'react'
import {CustomTextInput , RegistrWith} from '../components/ComponentIndex'
import {  TopImage1  } from '../../assets/Image'


const SignInPage = ({ navigation }) => {
  return (
    <ScrollView >
      <View style={styles.container}>

          <View style={styles.header_box}>
              <ImageBackground source={TopImage1} style={styles.TopImageBackground}>
                <Text style={styles.header_text}>Let's get you registered!</Text>
              </ImageBackground>
          </View>

          <View style={styles.PageChangeButtonDev}>
                <Pressable
                  onPress={() => { navigation.navigate('SignIn') }}
                  style={styles.PageChangeButtonPassiv} >
                  <Text style={styles.PageChangeButtonPassivText}>Sign In</Text>
                </Pressable>

                <Pressable style={styles.PageChangeButtonActive}>
                  <Text style={styles.PageChangeButtonActiveText}>Register</Text>
                </Pressable>
          </View>

          <View style={styles.inputbox}>
              <CustomTextInput setPlaceholder ='FullName'/>
              <CustomTextInput setPlaceholder ='E-mail Address'/>
              <CustomTextInput setPlaceholder ='Password'/>
              <CustomTextInput setPlaceholder ='Coniform Password'/>

              <Pressable style={styles.Registr_button}>
                <Text style={styles.Login_button_text}>Register</Text>
              </Pressable>
          </View>

          <RegistrWith bottomText = 'Login Now!' LinkText = {() => { navigation.navigate('SignIn')}}   />
      </View>
    </ScrollView>
  )
}

export default SignInPage

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
     
  },
  header_box:{
    width:'100%',
    height:180,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    overflow:'hidden'
  },
  TopImageBackground:{
    width:'100%',
    height:'100%',
    justifyContent:'center'
  },
  header_text:{
    marginLeft:'7%',
    color:'white',
    fontSize:25
  },
  PageChangeButtonDev:{
    display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'86%',
      height: 65,
      borderRadius:50,
      marginTop:-35,
      backgroundColor:'#e0e7e9',
      overflow:'hidden'
  },
  PageChangeButtonActive:{
    paddingHorizontal:60,
      paddingVertical:21,
      backgroundColor:'red',
      borderRadius:50
  },
  PageChangeButtonActiveText:{
    color:'white',
    fontSize:17,
    fontWeight:'bold'
  },
  PageChangeButtonPassiv:{
    paddingHorizontal:'15%',
    paddingVertical:'6%',
    
  },
  PageChangeButtonPassivText:{
    color:'black',
    fontSize:17,
    fontWeight:'bold'
  },
  inputbox:{
    display:'flex',
    alignItems:'center',
    width:'100%',
    marginTop:'10%'

  },forget:{
    marginLeft:'50%',
    marginTop:16
  },
  forget_text:{
    color:'red',
    fontWeight:'bold'
  },
  Registr_button:{
    width:'86%',
    backgroundColor:'#28313f',
    height:50,
    borderRadius:25,
    justifyContent:'center',
    marginTop:'8%'
  },
  Login_button_text:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  }
   
})  





 