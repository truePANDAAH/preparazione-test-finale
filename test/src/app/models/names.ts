export type Gender = 'male' | 'female' | 'other'| string;

export interface Name {
    name : string ;
    gender : 'male' | 'female' | 'other' | string ;
    probability : number ;
    count : number ;
}