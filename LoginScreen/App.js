
import React, {useState} from 'react';
import {View,TextInput,Button,StyleSheet,Text,Alert} from 'react-native';

export default function App(){
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const handleLogin = () =>{
      if(userName && password){
        Alert.alert('Login Succesfful', `Welcome ${userName}`);
      }else{
        Alert.alert('Error', 'Both username and password required');
      }
    }
  return(<>
   <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <TextInput placeholder='Enter Username' value={userName} style={styles.input} onChangeText={(txt)=>{setUserName(txt)}} />
    <TextInput placeholder='Enter Password' value={password} style={styles.input} onChangeText={((txt)=>{setPassword(txt)})}/>
    <View style={styles.loginBtn}>
      <Button title="Login" onPress={handleLogin} />
    </View>
   </View>
  
  </>)

 
};
const styles = StyleSheet.create({
  container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'orange'
  },
  title:{
      fontSize:24,
      fontWeight:'bold',
      marginBottom:20
     },
  input:{
      width:'80%',
      height:40,
      borderColor:'gray',
      borderWidth:1,
      borderRadius:5,
      paddingHorizontal:10,
      marginVertical:10,
      backgroundColor:'#fff'

  },
  loginBtn:{
    width: '80%',
   marginTop:20,
   
  }
});