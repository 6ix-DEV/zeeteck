
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Boutton = () => {
  return (
    <View style={styles.content}>
      <Text>Validé</Text>
    </View>
  )
}

export default Boutton

const styles = StyleSheet.create({
    content:{
        padding:10,
        margin:10,
        backgroundColor:'orange',
        height:40,
        width:150,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,

    }

})