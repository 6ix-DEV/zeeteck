import Boutton from '@/components/Boutton'
import Chocolat from '@/components/Chocolat'
import Compteur from '@/components/Compteur'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const index = () => {
  return (

    <View style={styles.content}> 
<Chocolat couleur=" blanc" marque="Ello"/>
    <Boutton/>

<Compteur/>
        
     
    </View>

  )
}

export default index

const styles = StyleSheet.create({
    //Style de de la vue principal
    //Flex occupe tout l'espace disponible Couleur Vert
    content:{
        flex:1,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
    }
})