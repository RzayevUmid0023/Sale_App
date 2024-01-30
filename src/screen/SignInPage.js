    import { StyleSheet, Text, View ,ImageBackground ,Pressable ,ScrollView} from 'react-native'
    import React from 'react'
    import {TopImage1  } from '../../assets/Image'
    import {CustomTextInput , RegistrWith} from '../components/ComponentIndex'



    const SignInPage = ({navigation}) => {
      return (
        <ScrollView> 
        <View style={styles.container}>

          <View style={styles.header_box}>
            <ImageBackground source={TopImage1} style={styles.TopImageBackground}>
              <Text style={styles.header_text}>Let's get you signed in!</Text>
            </ImageBackground>
          </View>

          <View style={styles.PageChangeButtonDev}>
              <Pressable style={styles.PageChangeButtonActive} >
                <Text style={styles.PageChangeButtonActiveText}>Sign In</Text>
              </Pressable>
              <Pressable 
                      onPress={()=>{navigation.navigate('Registr')}}
                      style={styles.PageChangeButtonPassiv}>
                <Text style={styles.PageChangeButtonPassivText}>Register</Text>
              </Pressable>
          </View>
          
          <View style={styles.inputbox}>
            
            <CustomTextInput setPlaceholder ='Name' />
            <CustomTextInput setPlaceholder ='Password' />
          
            <Pressable style={styles.forget}>
              <Text style={styles.forget_text}>Forget Password?</Text>
            </Pressable>

            <Pressable style={styles.Login_button}>
              <Text style={styles.Login_button_text}>Login</Text>
            </Pressable>

          </View>

          <RegistrWith bottomText = 'Registr Now!' LinkText = {() => { navigation.navigate('Registr')}}   />

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

      },
      textInput:{
        width:'86%',
        height:50,
        backgroundColor:'#e0e7e9',
        borderRadius:25,
        margin:10,
        padding:10,
        paddingLeft:20,
        fontSize:16,
  
      },forget:{
        marginLeft:'50%',
        marginTop:16
      },
      forget_text:{
        color:'red',
        fontWeight:'bold'
      },
      Login_button:{
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
    
 

 