import { View, Text ,Image, SafeAreaView} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
export default function Login() {
  return (
    <SafeAreaView>
      <Image  source={require('../assets/Images/Login.png')}style={{width:'100%',height:300}} />
      <View style={styles.container}>
        <Text styles={styles.welcome}>Wlcome to Educational App!!</Text>
      </View>
    
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
container:{
margin:-20,
padding:10,
borderTopRightRadius:30,
borderTopLeftRadius:30,
backgroundColor:'#fff'
},
welcome:{
    fontSize:25,
    fontWeight:'bold',
    color:'black',

}

})