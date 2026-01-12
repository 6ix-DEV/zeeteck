import { decrement, increment, reset } from '@/app/store/slices/counterSlice';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';


const ModifierCompteur = () => {
const dispatch = useDispatch();

  return (

    <View>
      <Text>ModifierCompteur</Text>
      <Button
        title='Plus'
        onPress={()=>dispatch(increment())}
        />

        <Button
        title='Moins'
        onPress={()=>dispatch(decrement())}
        />

        <Button
        title='Reset'
        onPress={()=>dispatch(reset())}
        />
    </View>
  )
}

export default ModifierCompteur

const styles = StyleSheet.create({
    content:{
        borderRadius:10,
        
    }
})