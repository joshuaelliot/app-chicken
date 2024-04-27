import { conversorKilograms } from "../../functions/conversorKg"
import { useContext } from "react"
import { ContextGlobal } from "../../context/contextGlobal";
import { getGrams } from "../../functions/conversorKg";
//import iconLogo from '/saco.svg'
import sacoMaiz from '../../assets/images/saco.png'
import './style/style.css'
export function ShowText(){
    const {date}= useContext(ContextGlobal);
    
    return (
        <>
        <span className="showtext kilograms">
        {`${conversorKilograms(date.foodGrams)}Kg`}
        </span>
        <img 
        style={{width:"60px",
        height:"70px",
        objectFit:"cover",}}
        src={sacoMaiz} alt="logo" />
        </>
    )
}

export function ShowTextGrams({nameMounth}){
    
    const {date}= useContext(ContextGlobal);
    const translateText=(text)=>{
        if(text === "First"){
            return "Primer Mes"
        }else if(text === "Second"){
            return "Segundo Mes"
        }else if(text === "Third"){
            return "Tercer mes"
        }
    }
    return (
        <>
        <div className="showtext-container">
            <h2>{translateText(nameMounth)}</h2>
        <span className="showtext grams">
            {getGrams(nameMounth,date.chicken) }
        </span>
        </div>
        </>
    )
}