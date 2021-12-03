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
import { StyleSheet, Text, View,ScrollView, SafeAreaView, TouchableOpacity,} from 'react-native';


export default function CriticalPatients({navigation})
{
  return (

    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    

        <View style={styles.darkBackground}>
            <Text style={styles.title}>Critical Condition Patients</Text>
        </View>

        <View style={styles.lightBackground}>
        <View style={styles.body}>
            <Text style={styles.name}>Will Smith</Text>
            <Text style={styles.records}>Patient id: 000012345</Text>
            <Text style={styles.records}>Blood Pressure: 50</Text>
            <Text style={styles.records}>Respiratory Rate: 85</Text>
            <Text style={styles.records}>Blood Oxygen Level: 60</Text>
            <Text style={styles.records}>Heartbeat Rate: 76</Text>
        </View>

        <View style={styles.body}>
            <Text style={styles.name}>Sam Rogers</Text>
            <Text style={styles.records}>Patient id: 000012346</Text>
             <Text style={styles.records}>Blood Pressure: 140</Text>
            <Text style={styles.records}>Respiratory Rate: 89</Text>
            <Text style={styles.records}>Blood Oxygen Level: 57</Text>
            <Text style={styles.records}>Heartbeat Rate: 60</Text>
        </View> 

        <View style={{alignItems: 'center'}}>
        <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.buttonText}>Return Home</Text>         
        </TouchableOpacity>
        </View>
        </View>

        </View>
        </ScrollView>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
   flex: 1,
   marginTop: 20,
  },
  title: {  
    fontSize: 32,
    color: 'white',
    marginTop:60,
    marginBottom:20,
    marginLeft: 20,
    fontWeight: "bold",
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 12,
  },
  records: {
    fontSize: 18,
    paddingLeft: 30,
    marginTop: 10,
  },
  darkBackground: {
    backgroundColor: '#2645B1',
  },
  lightBackground: {
    backgroundColor: '#D8E0FF',
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
