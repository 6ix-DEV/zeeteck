import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface ChocolatProps {
  couleur: string
  marque: string
}

const Chocolat = ({couleur, marque}: ChocolatProps) => {
  return (
    
    <View style={styles.content}>
<Text>Chocolat{couleur}!{marque}!</Text>
    </View>
  )
}

export default Chocolat

const styles = StyleSheet.create({
    
//Style de de la vue Chocolat
    
    content:{
        height:100,
        width:100,
        borderRadius:10,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    }
})