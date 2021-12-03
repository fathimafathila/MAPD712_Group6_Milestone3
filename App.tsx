
/**
 * MAPD712 - group 6 - milestone3 
 * 
 * Akash Sharma        301211702
 * Ridham Patel        301207688
 * Shrinal Patel       301204864
 * Fathima Fathila     301222885
 * Inderjit Singh      301149169
 */
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';     //imposrt all from react not React from react
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './app/screens/HomePage';
import LoginPage from './app/screens/LoginPage';
import SignUp from './app/screens/SignUp';
import AddPatient from './app/screens/AddPatient';
import AddRecord from './app/screens/AddRecord';
import ViewPatient from './app/screens/ViewPatient';
import ViewRecord from './app/screens/ViewRecord';
import ViewAllPatients from './app/screens/ViewAllPatients';
import ViewAllRecords from './app/screens/ViewAllRecords';
import CriticalPatients from './app/screens/CriticalPatients';
import PatientData from './app/screens/PatientData';
import RecordData from './app/screens/RecordData';


const MyStack = createNativeStackNavigator();

function App()
{
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen name="LoginPage" component={LoginPage} options={{
          headerShown: false
        }}/>
        <MyStack.Screen name="HomePage" component={HomePage} options={{
          headerShown: false
        }}/>
        <MyStack.Screen name="SignUp" component={SignUp} options={{
          headerShown: false
        }}/>
        <MyStack.Screen name="AddPatient" component={AddPatient}/>
        <MyStack.Screen name="AddRecord" component={AddRecord} />
        <MyStack.Screen name="ViewPatient" component={ViewPatient}/>
        <MyStack.Screen name="ViewRecord" component={ViewRecord}/>
        <MyStack.Screen name="ViewAllPatients" component={ViewAllPatients}/>
        <MyStack.Screen name="ViewAllRecords" component={ViewAllRecords}/>
        <MyStack.Screen name="CriticalPatients" component={CriticalPatients}/>
        <MyStack.Screen name="PatientData" component={PatientData}/>
        <MyStack.Screen name="RecordData" component={RecordData}/>
      </MyStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

