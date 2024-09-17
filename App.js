import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './Screens/login';
export default function App() {
  return (
<SafeAreaView style={styles.container}>
<Login />
  
</SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    margin:-20,
    paddingTop:0,
    backgroundColor: '#fff',
  
  },
});
