import { conversorKilograms } from "../../functions/conversorKg"
import { useContext } from "react"
import { ContextGlobal } from "../../context/contextGlobal";
//import iconLogo from '/saco.svg'
import sacoMaiz from '../../assets/images/saco.png'

export function ShowText(){
    const {date}= useContext(ContextGlobal);
    
    return (
        <>
        <img 
        style={{width:"60px",
        height:"70px",
        objectFit:"cover",}}
        src={sacoMaiz} alt="logo" />
        <span>{date.foodGrams >= 1000?
        `${conversorKilograms(date.foodGrams)}Kg`:`${date.foodGrams}grms`}</span>
        
        </>
    )
}