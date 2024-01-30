import { StyleSheet, Text, View ,ImageBackground,Pressable } from 'react-native'
import React,{useState} from 'react'
import { Open_image } from '../../assets/Image';
 


const StartPage = ({navigation}) => {
    const [buttonStyle, setButtonStyle] = useState(styles.button2);

    const handlePressIn = () => {setButtonStyle(styles.button1);}
    const handlePressOut = () => {setButtonStyle(styles.button2);}

  return (
    <View style = {styles.container}>
        <ImageBackground source={Open_image} resizeMode="cover" style={styles.image}>
            <Text style={styles.firstText}>Welcome to</Text>
            <Text style={styles.secondText}>Cavosh</Text>
            <Pressable  
                onPress={() => {
                    navigation.navigate('SignIn');
                  }}
                  onPressIn={handlePressIn}
                  onPressOut={handlePressOut}
                  style={buttonStyle}
            >
                <Text style={styles.button_write}>Get started...</Text>
            </Pressable>
        </ImageBackground>
    </View>
  )
}

export default StartPage

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
        
    },
    button1:{
        width:180,
        height:50,
        backgroundColor:'#262838',
        borderRadius:20,
        justifyContent:'center',
        marginTop:45

    },button2:{
        width:180,
        height:50,
        backgroundColor:'#130517',
        borderRadius:20,
        justifyContent:'center',
        marginTop:45
    },
    firstText:{
        color:'white',
        fontSize:28,
        marginTop:400
    },
    secondText:{
        fontSize:40,
        color:'red',
        margin:5,
        fontWeight:'bold',
        fontStyle:'italic'

    },
    button_write:{
        color:'white',
        textAlign:'center',
        fontSize:15,
        fontWeight:'bold'
    }

})