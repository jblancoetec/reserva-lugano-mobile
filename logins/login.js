import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>hola mundo</Text>
      <Image
          source ={{uri: 'https://picsum.photos/200/300'}}
          style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center', 
     alignItems: "center", 
     backgroundColor: '#292929' },
  Title: {fontSize: 30, color: 'red' },
  image: {height: 200, width: 200}

});

export default Login;
