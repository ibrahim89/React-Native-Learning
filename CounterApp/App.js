import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const [counter,setCounter] = useState(0);
  const incrementHandler = () =>{
    setCounter(counter+1);
  }
  const decrementHandler = () =>{
    setCounter(counter-1);
  }
  const resetHandler = () =>{
    setCounter(0);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.counterTxt}>{counter}</Text>
      <View style={styles.bttnLayout} >
        <Button stytle={styles.incrementBtn} title="Increment" onPress={incrementHandler}></Button>
        <Button stytle={styles.decrementBtn} title="Decrement" onPress={decrementHandler}></Button>
        <Button stytle={styles.decrementBtn} title="Reset" onPress={resetHandler}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      backgroundColor:'lightblue'
  },
  title:{
    fontSize:24,
      fontWeight:'bold',
      marginBottom:20
  },
  counterTxt:{
    fontSize:40,
    fontWeight:'bold',
    marginBottom:20

  },
  bttnLayout:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 50,
    width:'70%',
    alignSelf:'flex-end'
  },
  incrementBtn:{
   
   
  },
  decrementBtn:{
    
   
 
   
 
  }
});
