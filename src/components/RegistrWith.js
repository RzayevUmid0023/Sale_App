import { StyleSheet, Text, View ,Pressable , Image } from 'react-native'
import React from 'react'
import { Apple , Facebook ,Google } from '../../assets/Image'


const RegistrWith = ({ bottomText , LinkText}) => {
  return (
    <View  >
        <View style={styles.Footer}>
            <View style={styles.Footer_top}>

                <View style={styles.Footer_top_text}>
                    <View style={styles.line}></View>
                      <Text style={styles.Footer_top_textt}>Or register with</Text>
                      <View style={styles.line}></View>
                </View>

                <View style={styles.Footer_top_icons}>
                  <Pressable style={styles.Icons}>
                    <Image source={Google} style={styles.Icon_images} />
                  </Pressable>

                  <Pressable style={styles.Icons}>
                    <Image source={Apple} style={styles.Icon_images} />
                  </Pressable>

                  <Pressable style={styles.Icons}>
                    <Image source={Facebook} style={styles.Icon_images} />
                  </Pressable>
                </View>
            </View>
         </View>
        <View style={styles.Footer_bottom}>
          <Text style={styles.Footer_bottom_text}>Already have an account?</Text>
            <Pressable onPress={LinkText} >
                <Text style={styles.Footer_bottom_link}>{bottomText}</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default RegistrWith

const styles = StyleSheet.create({
    Footer:{
        display:'flex',
        width:'86%',
        alignItems:'center',
        justifyContent:'center'
         
      },
    Footer_top:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      },
      Footer_top_text:{
        width:'60%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:20
      },
      line:{
        width:100,
        height:1,
        backgroundColor:'black'
      },
      Footer_top_textt:{
        padding:20,
        fontSize:16,
        fontWeight:'500'
      },
      Footer_top_icons:{
        width:'86%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:20,
        marginBottom:100
        
      },Icons:{
        width:'30%',
        height:70,
        backgroundColor:'#f2e7df',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        
      },Icon_images:{
        width:50,
        height:50
      },
      Footer_bottom:{
        width:'86%',
        position:'absolute',
        bottom:15,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
      },
      Footer_bottom_text:{
        padding:5,
        fontWeight:'500'
      },Footer_bottom_link:{
        fontWeight:'700',
        color:'red'
    
      }
})