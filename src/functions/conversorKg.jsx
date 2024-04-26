

export function conversorKilograms(gramos){
const Gramos = typeof gramos === "string" ?parseFloat(gramos):gramos;

if(Gramos >= 1000){
    return (Gramos / 1000 );
}else{
    return Gramos;
}

}



export function chickenForFood(chickens,quantityFood = 5110){
let numberOfChickens= chickens === ""? 0 : chickens
    return (numberOfChickens * quantityFood );
}
