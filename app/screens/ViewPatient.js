/**
 * MAPD712 - group 10 - milestone23
 * 
 * GROUP 10 MEMBERS
 * Matthew Maxwell        301200258
 * Poojan Patel           301228811
 * Sanjeevan Pashparaj    301213104
 * Divyesh Solanki        301194819
 * Vidhu Gaba             301210694
 * 
 * we named the app weCare hopefully thats not an issue since we will continue
 *  to work onit for milestone 3
 * me
 */
 import React from 'react';
 import { StyleSheet, Text, SafeAreaView, Alert, View,TextInput, Button, TouchableOpacity} from 'react-native';
 
 
 export default function ViewPatient({navigation})
 {
   return (
     <View style={styles.container}>
       
       <View>
         <Text style={styles.label}>Enter patient email</Text>
         <TextInput
           style={styles.input}/> 
       </View>
       <View>
       <TouchableOpacity
          onPress={() => navigation.navigate('PatientData')}> 
            <Text style={styles.buttonText}>View Patient</Text>
          </TouchableOpacity> 
       </View>
 
 </View> // main view close
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#2645B1',
     alignItems: 'center',
     justifyContent: 'center',
   },
   body: {
    marginTop: 80,
   },
   label: {
     color: 'white',
     fontWeight: 'bold',
     fontSize: 20,
     margin: 12,
   },
   input: {
     backgroundColor:'white',
     height: 40,
     width: 250,
     margin: 12,
     borderWidth: 1,
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
 