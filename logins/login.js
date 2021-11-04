import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

const Login = () => {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permissionResult.granted == false) {
      alert("Se requiere permiso para continuar");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync()
    console.log(pickerResult)
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i2.wp.com/imagenesdejardines.com/wp-content/uploads/2016/05/Bonitas-imagenes-de-flores-para-enviar-por-mensajes-de-whatsapp.jpg?resize=530%2C795&ssl=1",
        }}
        style={styles.image}
      />
      <Text style={styles.Title}>Hola Mundo</Text>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9370db",
  },
  Title: { fontSize: 30, color: "white" },
  image: { height: 250, width: 250, borderRadius: 130 },
  button: {
    backgroundColor: "blue",
    padding: 7,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Login;
