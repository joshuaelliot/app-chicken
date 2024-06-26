import { useEffect, useState } from "react"
import { chickenForFood } from "../../../functions/conversorKg";
import { useContext } from "react";
import { ContextGlobal } from "../../../context/contextGlobal";
import iconChicken from "../../../assets/images/polla.png"



export function InputNumber({description}){
    const [value,setValue]= useState("");
    const {date,setDate} = useContext(ContextGlobal)

    useEffect(()=>{
        const result = chickenForFood(value)
        console.log("useEffect")
        console.log(result);
        setDate({
            chicken:value,
            foodGrams:result,
        });
        console.log(date);
    },[value])

    const handlerValue = (e)=>{
        let valueInput = e.target.value === "" ? 0 : parseInt(e.target.value);
        setValue(valueInput);
        console.log(typeof valueInput);
    }
    return(
        <>
        <img 
        style={{
            width:"50px",
            height:"50px",
            backgroundColor:"skyblue",
            borderRadius:"50%",
            boxSizing:"border-box",
            border:"solid 2px red",
        }}
        src={iconChicken}></img>
        <input type="text" placeholder={description} value={value === 0 ? "": value }
        onChange={handlerValue}
        ></input>
        </>
        
    )
}

