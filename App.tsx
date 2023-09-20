import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import Routes from './src/routes';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" && 30 ,
    flex: 1, 
    backgroundColor: 'rgba(7,26,93,255)',
  }
});

export default App;
