import { createContext, useState } from 'react';


export const ContextGlobal = createContext();
let stateGlobalAnimals={
  chicken:{
    numberOfChickens:0,
    foodGrams:100,
    select:true,
  },
  pig:{
    numberOfPigs:0,
    foodGrams:100,
    select:false,
  }

}
export function ContextGlobalProvider({children}){
  const infoText = {chiken:1,foodGrams:0};
  const [date,setDate]= useState(infoText)
  return (
    <ContextGlobal.Provider value={{date,setDate}}>
      {children}
    </ContextGlobal.Provider>
  )
}