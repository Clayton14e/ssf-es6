//Complete the below function. It will be given 3 inputs, an array of objects, an index and a key. The function should output a 
//string that reads: The information you requested is ____.  Have a nice day!
//Make use of interpolation to include the property from the object at the requested array index in place of the ____.
let objArray = [
    {
        name: 'Clayton',
        strength: '5'
    },
    {
        name: 'Robert',
        strength: '50'
    }
]
const stringWithObject = (array, index, key) => {
    return `The information you requested is ${array, array[index], index.name}`;
};




console.log(stringWithObject(objArray, objArray[0], objArray[0].name ));




//Do not edit
module.exports = stringWithObject;
