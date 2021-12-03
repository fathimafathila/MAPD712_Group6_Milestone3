/**
 * MAPD712 - group 6 - milestone3 
 * 
 * Akash Sharma        301211702
 * Ridham Patel        301207688
 * Shrinal Patel       301204864
 * Fathima Fathila     301222885
 * Inderjit Singh      301149169
 */

import React from 'react';
import { StyleSheet, Text, SafeAreaView, View,TextInput, Button, TouchableOpacity} from 'react-native';


export default function SignUp ({navigation})
{
  return (
    <View style={styles.container}>
      <View style={styles.darkBackground}>
        <Text style={styles.title}>Register here</Text>
      </View>

      <View style={styles.lightBackground}>

      <View style={styles.body}>
        <Text style={styles.label}>Email: </Text>
        <TextInput
          style={styles.input}
          placeholder={'example@email.com'}/>
      </View>

      <View style={styles.body}>  
        <Text style={styles.label}>Password: </Text>
        <TextInput
          style={styles.input}/>
      </View>

      <View style={styles.body}>
        <Text style={styles.label}>Confirm Password: </Text>
        <TextInput
          style={styles.input}/>
      </View>
      
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.buttonText}>Register</Text>         
        </TouchableOpacity>
      </View>
      

      <View style={styles.text}>
        <Text>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.link}>Sign in</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 20,
    flexDirection: 'row',
   },
   link: {
   color: 'blue',
   },
  title: {  
    fontSize: 32,
    color: 'white',
    marginTop:60,
    marginBottom:20,
    marginLeft: 20,
    fontWeight: "bold",
  },
  body: {
    marginTop: 10,
    flexDirection: 'row',
   },
  label: {
    fontSize: 20,
    margin: 12,
    width: 100,
  },
  input: {
    height: 40,
     width: 220,
     margin: 10,
     backgroundColor: 'white',
     fontSize: 18,
     padding: 10,
     borderRadius: 10,
  },
  darkBackground: {
    backgroundColor: '#2645B1',
  },
  lightBackground: {
    backgroundColor: '#D8E0FF',
    alignItems: 'center',
    borderRadius: 20,
    margin: 30,
    padding: 20,
  },
  button: {
    backgroundColor: '#2645B1',
    width: 220,
    height: 40,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 9,
  },
});
