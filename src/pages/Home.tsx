import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import api from '../services/service';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get('/').then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <View>
      {/* {movies.map(movie => (
                <Text>Teste</Text>
            ))} */}
      <Text>Teste</Text>
    </View>
  );
}
