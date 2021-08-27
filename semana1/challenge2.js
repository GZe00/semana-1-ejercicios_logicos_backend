const reverseInt = (number) => {
    //Implementación

    if(typeof number == `number`){
        number = String(number).split(``).reverse();
        if(number[number.length-1] == `-`){
            let push = number[number.length-1];
            number.splice(number.length-1, 1)
            number.splice(0,0,push);
            number = number.join(``);
            return Number(number);
        }else{
            number = number.join(``);
            return Number(number);
        }
    }else{
        throw new Error("Error: Tipo de dato no admitido.");
    }
}


module.exports = {
    reverseInt
}

