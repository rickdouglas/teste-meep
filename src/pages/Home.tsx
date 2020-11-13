import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity,StyleSheet, FlatList} from 'react-native';
import api from '../services/service';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get('films').then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FILMES</Text>
      <FlatList
      data={movies}
      showsVerticalScrollIndicator={false}
      keyExtractor={item=>String(item.episode_id)}
      renderItem={({item}) => (
                  <TouchableOpacity key={item.title} style={styles.button} activeOpacity={0.7}>
                    <Text style={styles.movieTitle}>{item.title}</Text>
                    <Text style={styles.movieDetails}>Diretor: {item.director}</Text>
                    <Text style={styles.movieDetails}>Produtor: {item.producer}</Text>
                    <Text style={styles.movieDetails}>Data de lançamento: {item.release_date}</Text>
                    <Text style={styles.movieDetails} numberOfLines={2}>Sinopse: {item.opening_crawl}</Text>
                  </TouchableOpacity>
      )}
      />
    </View>
  );
// #4E0000 Vermelho Dark
// #9E0000 Vermelho 
// #DDDEDA Branco
// #020004 Preto
// #1a1c22 Azul
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