import { StyleSheet, Text, View , ImageBackground ,ScrollView , Pressable} from 'react-native'
import React from 'react'
import { TopImage1 } from '../../assets/Image'
import { FontAwesome } from '@expo/vector-icons'
import {CustomTextInput , Navbar} from '../components/ComponentIndex'
const HomePage = () => {
  return (
    <View>
    <ScrollView>
      <View style ={styles.container}>
        <View style={styles.header_box}>
          <ImageBackground source={TopImage1} style={styles.TopImageBackground}>
            <Text style={styles.header_text}>Covosh</Text>
            <View style ={styles.header_box_child}>
              <Text style={styles.Text}>Good morning, user</Text>
              <FontAwesome name="bell" size={34} color="white"  style={styles.Top_icon}/>
            </View>
            
          </ImageBackground>
        </View>
        <View style={styles.Search_box}>
                <CustomTextInput setPlaceholder ='Search' />
                <Pressable style={styles.search_button} onPress={()=>{alert('deneme asamasinda')}}>
                    <FontAwesome name="search" size={24} color="white"  style={styles.search_icon}/>
                </Pressable>

            </View>
      </View>
     
    </ScrollView>
    <Navbar />
    </View>
    
  )
}

export default HomePage

const styles = StyleSheet.create({
  container:{
    width:'100%',
    minHeight:900
  },
  header_box:{
    width:'100%',
    height:200,
    display:'flex',
  },
  TopImageBackground:{
    width:'100%',
    height:'100%',
    borderRadius:30,
    overflow:'hidden'
  },
  header_text:{
    marginTop:40,
    textAlign:'center',
    color:'red',
    fontStyle:'italic',
    fontSize:23
  },
  header_box_child:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:30
  },
  Text:{
    fontSize:23,
    fontWeight:'bold',
    color:'white',
    marginLeft:20
  },
  Top_icon:{
    marginRight:20
  },
  Search_box:{
    position:'relative',
    width:'100%',
    alignItems:'center',
    top:-35
  },
  
  search_icon:{
    
    borderRadius:50,
    padding:13,
    backgroundColor:'red'
  },
  search_button:{
    position:'absolute',
    right:'7%',
    top:10,
  }
})
