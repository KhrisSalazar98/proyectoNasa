import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/views/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" && 30 ,
    backgroundColor: 'rgba(7,26,93,255)',
  }
});

export default App;
