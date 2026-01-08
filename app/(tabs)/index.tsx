import Todo from '@/components/Todo'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const index = () => {
  return (
    <View style={styles.content}>
     <Todo/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'green'
  }
})