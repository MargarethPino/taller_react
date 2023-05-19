import * as React from 'react';
import * as RN from 'react-native';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import {AntDesign} from '@expo/vector-icons';
import { baseDatos } from '../config/firebase';
import { View, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Objeto({ id, imagen, nombre, descripcion, precio, vendido }) {
  const editar = () => {
    const docRef = doc(baseDatos, 'objetos', id);
    updateDoc(docRef, { vendido: true });
  };

  const eliminar = () => {
    const docRef = doc(baseDatos, 'objetos', id);
    deleteDoc(docRef);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.imagen}>{imagen}</Text>
        <TouchableOpacity onPress={eliminar} style={styles.deleteButton}>
          <AntDesign name="delete" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.descripcion}>{descripcion}</Text>
        <Text style={styles.precio}>${precio}</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, vendido && styles.buttonDisabled]}
        onPress={editar}
        disabled={vendido}
      >
        <Text style={styles.buttonText}>{vendido ? 'Cargado' : 'Cargar'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = RN.StyleSheet.create({
  objetoContainer: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  nombre: {
    fontSize: 34,
    fontWeight: '700',
    fontFamily: 'Courier New',
     alignItems: 'center',
  },
  descripcion: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Courier New',
     alignItems: 'center',
  },
  imagen:{
    fontSize:100,
    borderWidth:1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
  },
  inputContainer: {
    width: '90%',
    padding: 13,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    fontFamily: 'Courier New',
  },
  conEliminar:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button:{
    borderRadius: 10,
    color: '#f0f',
    borderWidth:0.5,
    borderRadius: 8,  
    marginVertical: 2,
    fontFamily: 'Courier New',
    fontWeight:'500'
  },
});