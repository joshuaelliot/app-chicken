

export function conversorKilograms(gramos) {
  const Gramos = typeof gramos === "string" ? parseFloat(gramos) : gramos;

  if (Gramos >= 1000) {
    return (Gramos / 1000);
  } else {
    return Gramos;
  }

}



export function chickenForFood(chickens, quantityFood = 5110) {
  let numberOfChickens = chickens === "" ? 0 : chickens
  return (numberOfChickens * quantityFood);
}

export function getGrams(mounth, numberChickens) {
  const GramsForChicken = {
    firstMounth: (22.5 * numberChickens),
    secondMounth: (65 * numberChickens),
    thirdMounth: (95 * numberChickens),
  };

  const gramsForMounth = (numberMounth) => {
    return (numberMounth * 7) * 4;
  };

  if (mounth === "First") {
    let first = gramsForMounth(GramsForChicken.firstMounth);
    if (first >= 1000) {
      return `${conversorKilograms(first)} kg`
    }
    return `${conversorKilograms(first)} gramos`
  }
  if (mounth === "Second") {
    let second = gramsForMounth(GramsForChicken.secondMounth);
    if (second >= 1000) {
      return `${conversorKilograms(second)} kg`
    }
    return `${conversorKilograms(second)} gramos`
  }
  if (mounth === "Third") {
    let third = gramsForMounth(GramsForChicken.thirdMounth);
    if (third >= 1000) {
      return `${conversorKilograms(third)} kg`
    }
    return `${conversorKilograms(third)} gramos`
  }
}