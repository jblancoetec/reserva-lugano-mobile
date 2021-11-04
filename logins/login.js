import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, } from "react-native";


const Login = () => {
  return (
    <View style={styles.container}>

      <Image
          source ={{uri: 'https://i2.wp.com/imagenesdejardines.com/wp-content/uploads/2016/05/Bonitas-imagenes-de-flores-para-enviar-por-mensajes-de-whatsapp.jpg?resize=530%2C795&ssl=1'}}
          style={styles.image}
      />
      <Text style={styles.Title}>Hola Mundo</Text>
      <TouchableOpacity
        onPress={ () => Alert.alert('Hello!!')}
        style= {styles.button}
      >
        <Text style={styles.buttonText}>Press me</Text>
          
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center', 
     alignItems: "center", 
     backgroundColor: '#303030' },
  Title: {fontSize: 30, color: 'white' },
  image: {height: 250, width: 250, borderRadius: 130},
  button:{
    backgroundColor: 'blue',
    padding: 7,
    marginTop: 10
  },
  buttonText: {
    color: '#fff'
  }

});

export default Login;
