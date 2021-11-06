import * as React from 'react';

import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import categorias from "../assets/data/categorias";
import Styles from "./styles";

const PrimeraCategoria = categorias.items[0];

const  Main = (props: HomeCategotyProps) => { 
    return (
      <View>
      <FlatList
            
            data={PrimeraCategoria.plantas}
            renderItem={({item}) => (
                <Image style={Styles.ImgPlanta}
                source={{uri:item.plantaimg}}
                />
            )}
            horizontal={true}
      />
      </View>
    );
  };
  export default Main;