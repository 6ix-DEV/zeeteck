import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'


const Compteur  = () => {
//Declaration de la variable nombre

const [nombre, setNombre] = useState(10)
//Fonction d'incrémentation

const incrementation = () => {
        console.log("j'incrémente le compteur", nombre)
        setNombre(nombre + 1)
}

const decrementation = () => {
        console.log("décrémente le compteur", nombre)
        setNombre(nombre -1)
}
const reset = () => {
        console.log("reset", nombre)
        setNombre(0)
}
  return (
    
    <View >

        <Text>Compteur :{nombre}</Text>

        <View style={styles.content}>
        <Button
            onPress={incrementation}
            title="Incrementation"
            color="#c09506ff"
            />
        <Button
            onPress={decrementation}
            title="Décrementation"
            color="#c09506ff"
            />
        <Button
            onPress={reset}
            title="Reset"
            color="#c09506ff"
            />
        </View>
    </View>

  )
}

export default Compteur

const styles = StyleSheet.create({
    content:{
        justifyContent:"space-between",
        alignItems:'center',
    }
})
