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
import { StyleSheet, Text,ScrollView, SafeAreaView, StatusBar, View,TextInput,TouchableOpacity} from 'react-native';
import {getDBConnection, createTable, saveToDoItems, deleteTable, GetPatientById} from '../../models/db-service';

export default function ViewAllPatients({navigation})
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
             var username = results.rows.item(3).firstName;
             var lastname = results.rows.item(3).lastName;
             var birth = results.rows.item(3).dob;
             var age = results.rows.item(3).age;
             var tel = results.rows.item(3).telephone;
             var add = results.rows.item(3).address;
             var gender = results.rows.item(3).gender;
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
  return (
    <SafeAreaView style={styles.container}>
         <View style={styles.darkBackground}>
             <Text style={styles.logo}>Patient Clinical List</Text>
         </View>
 
         <View style={styles.lightBackground}>
           <View style={styles.body}>
             <Text style={styles.labels}>Patient ID </Text>
             <Text style={styles.labels}>Patient Name </Text>
             <Text style={styles.labels}>Patient DOB</Text>
             <Text style={styles.labels}>Contact Number</Text>
           </View>
           <View style={styles.body}>
             <Text style={styles.label}>000344234 </Text>
             <Text style={styles.label}>{firstName}</Text>
             <Text style={styles.label}>{dob}</Text>
             <Text style={styles.label}>{telephone}</Text>
           </View>
          
 
           
         
           <View style={styles.button}>
         <TouchableOpacity
           onPress={() => navigation.navigate('HomePage')}>
           <Text style={styles.buttonText}>Return Home</Text>         
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
     textAlign: 'center',
   },
   labels: {
     fontSize: 20,
     width: 88,
     margin: 10,
     color: 'white',
     borderRadius: 10,
     backgroundColor: '#2645B1',
     textAlign: 'center',
    },
   label: {
    fontSize: 14,
    width: 88,
    margin: 10,
    paddingBottom: 9,
    paddingTop: 9,
    textAlign: 'center',
    backgroundColor: '#D8E0FF',
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
 