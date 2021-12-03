
/**
 * MAPD712 - group 6 - milestone3 
 * 
 * Akash Sharma        301211702
 * Ridham Patel        301207688
 * Shrinal Patel       301204864
 * Fathima Fathila     301222885
 * Inderjit Singh      301149169
 */
export type NewPatient = {
    id: number;
    firstName: string;
    lastName: string;
    dob : number;
    gender: string;
    age: number;
    telephone: number;
    address: string;
}
export type HealthRecord = {
    id: number;
    height: number;
    weight:number;
    bg : string;
    bp: number;
    rr: number;
    bo: number;
    hr: number;
}