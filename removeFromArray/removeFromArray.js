const removeFromArray = function(...UserArray) {

    let newArray = UserArray[0];
    let TransformedArray = [];

    newArray.forEach((item) => {

        if (!UserArray.includes(item)) {
            TransformedArray.push(item);
        }
        
    });
return TransformedArray;
}

module.exports = removeFromArray
