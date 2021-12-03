/**
 * MAPD712 - group 6 - milestone3 
 * 
 * Akash Sharma        301211702
 * Ridham Patel        301207688
 * Shrinal Patel       301204864
 * Fathima Fathila     301222885
 * Inderjit Singh      301149169
 */

 import React, {useState, useCallback, useEffect} from 'react';
 import { StyleSheet, Text, Alert, SafeAreaView, View,TextInput, TouchableOpacity, } from 'react-native';
 import {getDBConnection, createTable, saveToDoItems, deleteTable, GetPatientById} from '../../models/db-service';
 
 
 export default function PatientData({navigation})
 {
  const [firstName,setFirstName] = useState();
  const [lastName,setLastName] = useState();
  const [dob,setDOB] = useState();
  const [age,setAge] = useState();
  const [telephone,setTelephone] = useState();
  const [address,setAddress] = useState();
  const [gender,setGender] = useState();
  
  const loadDataCallback = useCallback(
    async () => {
      try{
        getData();
        console.log("1st");
      }catch(error){
      console.error(error);
    }
  }, []
  );

  useEffect(()=>{
    loadDataCallback();
  }, [loadDataCallback]);

  const getData = async () => {
    try{
       const db = getDBConnection();
       console.log("Work");
       db.transaction((tx) =>{
         tx.executeSql(
           'SELECT * FROM NewPatient',
           [],
           (tx,results) =>{
             var id = 3;
             var username = results.rows.item(id).firstName;
             var lastname = results.rows.item(id).lastName;
             var birth = results.rows.item(id).dob;
             var age = results.rows.item(id).age;
             var tel = results.rows.item(id).telephone;
             var add = results.rows.item(id).address;
             var gender = results.rows.item(id).gender;
             setFirstName(username);
            setLastName(lastname);
            setDOB(birth);
            setGender(gender);
            setAddress(add);
            setTelephone(tel);
            setAge(age);
           }
         )
       })
     }catch(error){
        console.error(error);
    }
  }
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
             <Text style={styles.logo}>Smith John</Text>
             <Text style={styles.id}>ID : 000111222</Text>
         </View>
 
         <View style={styles.lightBackground}>
           <View style={styles.body}>
             <Text style={styles.label}>First Name: </Text>
             <Text style={styles.input}>{firstName}</Text>
           </View>
 
           <View style={styles.body}>
             <Text style={styles.label}>Last Name: </Text>
             <Text style={styles.input}>{lastName}</Text>
           </View>
 
           <View style={styles.body}>
             <Text style={styles.label}>DOB: </Text>
             <Text style={styles.input}>{dob}</Text>
           </View>
 
           <View style={styles.body}>
             <Text style={styles.label}>Gender: </Text>
             <Text style={styles.input}>{gender}</Text>
           </View>
 
           <View style={styles.body}>
             <Text style={styles.label}>Age: </Text>
             <Text style={styles.input}>{age}</Text>
           </View>
 
           <View style={styles.body}>
             <Text style={styles.label}>Telephone: </Text>
             <Text style={styles.input}>{telephone}</Text>
           </View>
 
           <View style={styles.body}>
             <Text style={styles.label}>Address: </Text>
             <Text style={styles.input}>{address}</Text>
           </View>  
         
           <View style={styles.button}>
         <TouchableOpacity
           onPress={() => navigation.navigate('ViewPatient')}>
           <Text style={styles.buttonText}>BACK</Text>         
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
     marginTop:40,
     marginBottom:20,
     marginLeft: 170,
     fontWeight: "bold",
   },
   id :{
    fontSize: 12,
    color: 'white',
    marginBottom:20,
    marginLeft: 170,

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
 