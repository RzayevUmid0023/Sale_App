import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({setPlaceholder}) => {
  return (
    <TextInput style={styles.textInput} placeholder = {setPlaceholder}  />
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    textInput:{
        width:'86%',
        height:50,
        backgroundColor:'#e0e7e9',
        borderRadius:25,
        margin:10,
        padding:10,
        paddingLeft:20,
        fontSize:16,
      },
})