import { createContext, useState } from 'react';


export const ContextGlobal = createContext();

export function ContextGlobalProvider({children}){
  const infoText = {chiken:1,foodGrams:100};
  const [date,setDate]= useState(infoText)
  return (
    <ContextGlobal.Provider value={{date,setDate}}>
      {children}
    </ContextGlobal.Provider>
  )
}