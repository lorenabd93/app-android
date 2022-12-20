import React from "react";
import { StyleSheet, Text, View, TextInput,Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";



export default  function  ButtonGradient(){
return(
    <TouchableOpacity style={styles.container}>

            <LinearGradient
        // Button Linear Gradient
        colors={['#fff1eb','#ace0f9']}
        start={{x:0, y: 0}}
        end={{x:1, y: 1}}
        style={styles.button}>
        <Text style={styles.text}>SIGN IN</Text>
      </LinearGradient>
    </TouchableOpacity>


);

}


const styles = StyleSheet.create({

  container :{

    width: 200,
    alignItems:'center',
    marginTop:20,
    
    


  },
  text: {
    fontSize:14,
    color:'gray',
    marginTop:20,
    
  },
  button:{

    width:'80%',
    height:50,
    alignItems: 'center',


  }
  
  
  });
  