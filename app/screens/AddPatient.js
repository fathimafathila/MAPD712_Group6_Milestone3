/**
 * MAPD712 - group 6 - milestone3
 * 
 * Akash Sharma        301211702
 * Ridham Patel        301207688
 * Shrinal Patel       301204864
 * Fathima Fathila     301222885
 * Inderjit Singh      301149169
 */

import React, {useEffect, useCallback, useState}  from 'react';
import { StyleSheet, Text, Alert, SafeAreaView, View,TextInput, TouchableOpacity, } from 'react-native';

import {getDBConnection, createTable, saveToDoItems, deleteTable, GetPatientById} from '../../models/db-service';
import { NewPatient } from '../../models/patient';

export default function AddPatient({navigation})
{
 
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [dob,setDob] = useState('');
  const [gender,setGender] = useState('');
  const [age,setAge] = useState('');
  const [telephone,setTelephone] = useState('');
  const [address,setAddress] = useState('');

  const loadDataCallback = useCallback(
    async () => {
      try{
        
        const db = getDBConnection();
        createTable(db);
       
        console.log("1st");
      }catch(error){
      console.error(error);
    }
  }, []
  );

  useEffect(()=>{
    loadDataCallback();
  }, [loadDataCallback]);

  const addTodo = async () => {
    try{
      const newPatients = [{
        id:3,  
        firstName: firstName,
        lastName : lastName ,
        dob : dob,
        gender:gender,
        age:age,
        telephone:telephone,
        address:address,
      }];
      console.log("Hello");
      const db = await getDBConnection();
      await saveToDoItems(db, newPatients);
      console.log(firstName)
      console.log(lastName)
      console.log(dob)
      console.log(gender)
      console.log(age)
      setFirstName('');

    }catch(error){
        console.error(error);
    }
  };

  const btnPressed= () =>
  Alert.alert(
    "Success",
    "Record Added Successfully",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.darkBackground}>
            <Text style={styles.logo}>Patient Clinical Information</Text>
        </View>

        <View style={styles.lightBackground}>
          <View style={styles.body}>
            <Text style={styles.label}>First Name: </Text>
            <TextInput
                style={styles.input} value={firstName} onChangeText={text=>setFirstName(text)}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Last Name: </Text>
            <TextInput
                style={styles.input} value={lastName} onChangeText={text=>setLastName(text)}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>DOB: </Text>
            <TextInput
                style={styles.input} value={dob} onChangeText={text=>setDob(text)}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Gender: </Text>
            <TextInput
                style={styles.input}value={gender} onChangeText={text=>setGender(text)}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Age: </Text>
            <TextInput
                style={styles.input} value={age} onChangeText={text=>setAge(text)}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Telephone: </Text>
            <TextInput
                style={styles.input} value={telephone} onChangeText={text=>setTelephone(text)}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Address: </Text>
            <TextInput
                style={styles.input} value={address} onChangeText={text=>setAddress(text)}/>
          </View>  
        
          <View style={styles.button} onPress={addTodo} >
        <TouchableOpacity
          onPress={() => navigation.navigate('HomePage'), addTodo}>
          <Text style={styles.buttonText}  >Add Patient</Text>         
        </TouchableOpacity>
        </View>

        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginHorizontal: 10,
  },
  body: {
    marginTop: 10,
    flexDirection: 'row',
  },
  logo: {  
    fontSize: 32,
    color: 'white',
    marginTop:60,
    marginBottom:20,
    marginLeft: 20,
    fontWeight: "bold",
  },
  label: {
    fontSize: 20,
    width: 100,
    margin: 12,
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
