const reverseString = (str) => {
    //Implementación
    if(typeof str == "string" && str.length < 14 && str.length > 1){return str.split("").reverse().join("");
    }else throw new Error("Error: Tipo de dato o longitud no admitidos.");

}


module.exports = {
        reverseString
}
