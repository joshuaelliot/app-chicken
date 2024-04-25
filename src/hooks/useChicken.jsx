import { useEffect, useState } from "react";
import { chickenForFood } from "../functions/conversorKg";



export function useChicken(chicken){
    const [date,setDate]=useState({
        quantityChicken:{chicken},
        quantityFood:5110,
    });
useEffect(()=>{
setDate(()=>{
    let result = (chicken * date.quantityFood);
    console.log(result)
    return {
        quantityChicken:chicken,
        quantityFood:result,
    }
});

},[chicken])
    return date;
}