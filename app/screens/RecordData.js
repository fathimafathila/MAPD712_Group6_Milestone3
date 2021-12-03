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
 
 export default function RecordData({navigation})
 {
  
  const [bp,setBp] = useState();
  const [rr,setRr] = useState();
  const [bo,setBo] = useState();
  const [hr,setHr] = useState();

  
  const loadDataCallback = useCallback(
    async () => {
      try{
        getData();
        
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
       
       db.transaction((tx) =>{
         tx.executeSql(
           'SELECT * FROM HealthRecord',
           [],
           (tx,results) =>{
             var id = 0;
             var bp = results.rows.item(id).bp;
             var rr = results.rows.item(id).rr;
             var bo = results.rows.item(id).bo;
             var hr = results.rows.item(id).hr;
             console.log(hr);
            setBp(bp);
            setRr(rr);
            setBo(bo);
            setHr(hr);
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
             <Text style={styles.label}>Blood Pressure: </Text>
             <Text style={styles.input}>{bp}</Text>
           </View>
 
           <View style={styles.body}>
             <Text style={styles.label}>Respiratory Rate: </Text>
             <Text style={styles.input}>{rr}</Text>
           </View>
 
           <View style={styles.body}>
             <Text style={styles.label}>Blood Oxygen Level: </Text>
             <Text style={styles.input}>{bo}</Text>
           </View>
 
           <View style={styles.body}>
             <Text style={styles.label}>Heart Beat Rate: </Text>
             <Text style={styles.input}>{hr}</Text>
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
 