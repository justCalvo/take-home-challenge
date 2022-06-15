import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// screens
import Home from './src/screens/Home/Home';

const App = () => (
  <SafeAreaView style={styles.container}>
    <Home />
    <StatusBar style="auto" />
  </SafeAreaView>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
