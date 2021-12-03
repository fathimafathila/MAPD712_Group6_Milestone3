
/**
 * MAPD712 - group 6 - milestone3 
 * 
 * Akash Sharma        301211702
 * Ridham Patel        301207688
 * Shrinal Patel       301204864
 * Fathima Fathila     301222885
 * Inderjit Singh      301149169
 */
import { enablePromise} from 'react-native-sqlite-storage';
import { NewPatient, HealthRecord } from './patient';
import * as SQLite from 'expo-sqlite';
const tableName = 'NewPatient';

export const getDBConnection = () => {
    //return openDatabase({name: 'todo1.db', location: 'default'});
    return SQLite.openDatabase('pateint1.db');
};

export const createTable = (db: SQLite.Database) => {
    const q = 'CREATE TABLE IF NOT EXISTS NewPatient (id INTEGER PRIMARY KEY AUTOINCREMENT,firstName TEXT NOT NULL,lastName TEXT NOT NULL,dob INTEGER NOT NULL,gender TEXT NOT NULL,age INTEGER NOT NULL,telephone INTEGER NOT NULL,address TEXT NOT NULL)';
    
    db.transaction( tx => {
         tx.executeSql(q,[],(tx,res)=>{},
         (tx, err)=>{console.error("create", err); return false;});
     });
};
export const createHealthTable = (db: SQLite.Database) => {
    const q = 'CREATE TABLE IF NOT EXISTS HealthRecord (id INTEGER PRIMARY KEY AUTOINCREMENT,height INTEGER NOT NULL,weight INTEGER NOT NULL,bg INTEGER NOT NULL,bp STRING NOT NULL,rr INTEGER NOT NULL,bo INTEGER NOT NULL,hr INTEGER NOT NULL)';
    
    db.transaction( tx => {
         tx.executeSql(q,[],(tx,res)=>{},
         (tx, err)=>{console.error("create", err); return false;});
     });
};

export const saveToDoItems = async (db: SQLite.Database, todos:NewPatient[]) => {
    console.log("Enter SavetoDo");
    const insertQuery = 
    `INSERT OR REPLACE INTO NewPatient(id, firstName, lastName, dob, gender, age, telephone, address) values `+
    todos.map(i => `('${i.id}', '${i.firstName}','${i.lastName}','${i.dob}','${i.gender}', '${i.age}','${i.telephone}','${i.address}' )`).join(',');
    console.log("inserted");
    db.transaction( tx => {tx.executeSql(insertQuery,[],(tx,res)=>{},
        (tx, err)=>{console.error("insert", err); return false;})});
       
};

export const saveToHealth = async (db: SQLite.Database, todos:HealthRecord[]) => {
    console.log("Enter SavetoDo");
    const insertQuery = 
    `INSERT OR REPLACE INTO HealthRecord(id, height,weight,bg,bp,rr,bo,hr) values `+
    todos.map(i => `('${i.id}', '${i.height}','${i.weight}','${i.bg}','${i.bp}', '${i.rr}','${i.bo}','${i.hr}' )`).join(',');
    console.log("inserted");
    db.transaction( tx => {tx.executeSql(insertQuery,[],(tx,res)=>{},
        (tx, err)=>{console.error("insert", err); return false;})});
       
};

export const GetPatientById = async (db:SQLite.Database, id:'id') => {
    const q = `SELECT * FROM NewPatient WHERE id = ${id}`;
    db.transaction( tx => {tx.executeSql(q,[],(tx,res)=>{},
    (tx, err)=>{console.error(err); return false;});});
    console.log("Select");
};


