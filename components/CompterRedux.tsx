import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const CompterRedux = () => {
    // Lecture de counter dans le store
    const count = useSelector((state)=>state.counter.value)
    console.log('count',count)

    // Le programme retourne les caracteristiques suivantes
  return (
    
    <View>
      <Text>CompterRedux {count}</Text>
    </View>
  )
}

export default CompterRedux

const styles = StyleSheet.create({})