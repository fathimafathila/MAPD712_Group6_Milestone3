/**
 * MAPD712 - group 6 - milestone3
 * 
 * Akash Sharma        301211702
 * Ridham Patel        301207688
 * Shrinal Patel       301204864
 * Fathima Fathila     301222885
 * Inderjit Singh      301149169
 */

import React, {useEffect, useCallback, useState} from 'react';
import { StyleSheet, Text, Alert, SafeAreaView, View,TextInput, TouchableOpacity, } from 'react-native';
import {getDBConnection, createHealthTable, saveToDoItems, deleteTable, GetPatientById, saveToHealth} from '../../models/db-service';


export default function AddRecord({navigation})
{
  const [height,setHeight] = useState('');
  const [weight,setWeight] = useState('');
  const [bg,setBloodGroup] = useState('');
  const [bp,setBloodPressure] = useState('');
  const [rr,setRespirator] = useState('');
  const [bo,setBloodOxygen] = useState('');
  const [hr,setheartRate] = useState('');

  const loadDataCallback = useCallback(
    async () => {
      try{
        console.log('hello');
        const db = getDBConnection();
        createHealthTable(db);
       
        console.log("1st");
      }catch(error){
      console.error(error);
    }
  }, []
  );

  useEffect(()=>{
    loadDataCallback();
  }, [loadDataCallback]);

  const addHealth = async () => {
    try{
      const newHealths = [{
        id:0,  
        height: height,
        weight : weight ,
        bg : bg,
        bp:bp,
        rr:rr,
        bo:bo,
        hr:hr,
      }];
      console.log("Hello");
      const db = await getDBConnection();
      await saveToHealth(db, newHealths);
      setBloodPressure('');

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
            <Text style={styles.title}>Patient Record</Text>
        </View>

        <View style={styles.lightBackground}>
          <View style={styles.body}>
            <Text style={styles.label}>Height: </Text>
            <TextInput
                style={styles.input} value={height} onChangeText={text=>setHeight(text)}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Weight: </Text>
            <TextInput
                style={styles.input} value={weight} onChangeText={text=>setWeight(text)}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Blood Group: </Text>
            <TextInput
                style={styles.input} value={bg} onChangeText={text=>setBloodGroup(text)}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Blood pressure: </Text>
            <TextInput
                style={styles.input} value={bp} onChangeText={text=>setBloodPressure(text)}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Respiratory Rate: </Text>
            <TextInput
                style={styles.input} value={rr} onChangeText={text=>setRespirator(text)}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Blood oxygen Level: </Text>
            <TextInput
                style={styles.input} value={bo} onChangeText={text=>setBloodOxygen(text)}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Heart Beat Rate: </Text>
            <TextInput
                style={styles.input} value={hr} onChangeText={text=>setheartRate(text)}/>
          </View>  
        
          <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewPatient'), addHealth}>
          <Text style={styles.buttonText}>Add Record</Text>         
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
  title: {  
    fontSize: 32,
    color: 'white',
    marginTop:60,
    marginBottom:20,
    marginLeft: 20,
    fontWeight: "bold",
  },
  label: {
    fontSize: 20,
    width: 90,
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
    margin: 20,
    padding: 10,
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
