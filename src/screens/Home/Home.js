import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';

// components
import SearchByCoords from './components/SearchByCoords';

const Home = () => {
  const [data, setData] = useState();

  return (
    <>
      {data && data.status === "FAILED" && (
        <Text style={styles.message}>{data.message}</Text>
      )}
      <SearchByCoords data={data} setData={setData} />
    </>

  );
}

const styles = StyleSheet.create({
  message: {
    color: 'red',
  },
});

export default Home;
