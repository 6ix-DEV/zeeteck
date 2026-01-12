//Importation des éléments a utiliser
import CompterRedux from '@/components/CompterRedux';
import Compteur from '@/components/Compteur';
import ModifierCompteur from '@/components/ModifierCompteur';
import Todo from '@/components/Todo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '../store/store';

//Declaration des const
const index = () => {
  return (

// Declarer le store de variable dans notre application
  <Provider store={store}>
      <View style={styles.content}>
        <Compteur/>
        <CompterRedux/>
        <ModifierCompteur/>
        <Todo/>
      </View>
    </Provider>
  )
}

//  Declaration comme une feuille de style
export default index

const styles = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'green'
  }
})