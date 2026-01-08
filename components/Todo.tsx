import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';


const Todo = () => {
//Initialisation de la variable

const [tache, settache] = useState('');
const [dataTasks, setDataTasks] = useState([]);

//Fonction pour l'enregistrement d'ue tache.
const saveTache = () => {
    console.log('valeur textInput',tache)
    //Vrification que le formulaire n'est pas vide .
    if (tache === '') {
        Alert.alert('Erreur', 'Veuillez entrer une tâche');
        return;
    }
    //fin de la verification.
    //formatage d'une tache objet.
    const newTask = {

        id:Date.now().toString(),
        task:tache,
        complete:false,
    }
    console.log(newTask)
    //Ajouter la nouvelle tache au tache .
    setDataTasks([...dataTasks,newTask])
    //Vider le Formulaire.
    settache('')
    
}
//Fin de la fonction d'enregistrement d'une tache.
//Debut rendu d'une tache.
const renderTask = ({item}) => {
    return(<View>
        <Text>{item.task}</Text>
    </View>)
}
//Fin rendu d'une tache 
  return (

<View style={styles.content}> 

    <Text style={styles.title}>Mon gestionnaire de tache</Text>

      <TextInput 
      value={tache}
      onChangeText={settache}
      placeholder='Ajouter une saisie'/>

      <Button title='ajouter'
      onPress={saveTache}
      />
    <FlatList
        data={dataTasks}
        renderItem={renderTask}
        keyExtractor={item=>item.id}/>

    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
    //Style de de la vue principal
    //Flex occupe tout l'espace disponible Couleur Vert
    content:{
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
    },

    title:{
        color:'grey',
        fontSize:24,
        fontWeight:600,
        padding:10,
        
    }
})

