import React from "react";
import Login from "./logins/login";
import Main from "./MainScreen/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";

// const Tab = createBottomTabNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator style={{ paddingTop: StatusBar.currentHeight }}>
      <Tab.Screen
        options={{ title: () => <Entypo name="menu" size={24} /> }}
        name="home"
        component={Login}
      />

      <Tab.Screen
        options={{
          title: () => <FontAwesome name="search" size={24} color="black" />,
        }}
        name="Buscar"
        component={Main}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
