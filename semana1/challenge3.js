const capitalizeLetters = (str) => {
    //Implementación
    str = str.split(` `);
    for(let i = 0; i < str.length; i++){
        str[i] = str[i].replace(/\w/, firstLetter => firstLetter.toUpperCase())
    }
    str = str.join(` `);
    return str
}

module.exports = {
    capitalizeLetters
}
