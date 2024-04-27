import { createContext, useState } from 'react';


export const ContextGlobal = createContext();
let stateGlobalAnimals={
  chicken:{
    numberOfChickens:0,
    firstMounthGrams:0,
    totalFoodGrams:0,
    select:true,

  },
  

}
export function ContextGlobalProvider({children}){
  const infoText = {chiken:0,foodGrams:0};
  const [date,setDate]= useState(infoText)
  return (
    <ContextGlobal.Provider value={{date,setDate}}>
      {children}
    </ContextGlobal.Provider>
  )
}