import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native'
import {useNavigation} from '@react-navigation/native'
import api from '../services/service';
import { set } from 'react-native-reanimated';

export default function Details() {
  const route = useRoute();

  const [details, setDetails] = useState({});

  const navigation = useNavigation();

  const handleNavigateToCharacters = (item)=>{
    navigation.navigate('Characters', {data: item});
  }


  useEffect(()=>{
    setDetails(route.params.data)
  },[])

  return (
    <View style={styles.container}>
        <View style={styles.button}>
            <Text style={styles.movieTitle}> {details.title}</Text>
            <Text style={styles.movieDetails}> {details.opening_crawl}</Text>
            <TouchableOpacity  onPress={() => loadCharacters()} style={styles.button} activeOpacity={0.7}>
                <Text style={styles.movieTitle}>Personagens</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => loadPlanets() } style={styles.button} activeOpacity={0.7}>
                <Text style={styles.movieTitle}>Planetas</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => loadVehicles() } style={styles.button} activeOpacity={0.7}>
                <Text style={styles.movieTitle}>Veiculos</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => loadStarShip() } style={styles.button} activeOpacity={0.7}>
                <Text style={styles.movieTitle}>Naves</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => loadSpecies() } style={styles.button} activeOpacity={0.7}>
                <Text style={styles.movieTitle}>Especies</Text>
            </TouchableOpacity>

        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#9e0000',
      paddingHorizontal: 20
    },
    title: {
      color: '#4e0000',
      fontSize:24,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    button: {
      backgroundColor: '#1a1c22',
      marginTop: 10,
      padding: 10,
      borderRadius: 8
    },
    movieTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color:'#DDDEDA'
    },
    movieDetails: {
      fontSize: 14,
      color:'#DDDEDA'
    },
  
  })