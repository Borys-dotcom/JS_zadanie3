let inputArray = [1,2,3,4,5,6];
let itemSum = 0;
let itemMulti = 1;
// function sumAndMulti(array){
//     let resultSum = 0;
//     let resultMultiplication = 1;

//     array.forEach( => {
        
//     });{
//         resultSum += array[i];
//         resultMultiplication *= array[i];
//     }

//     console.log(resultSum);
//     console.log(resultMultiplication);
// }
// sumAndMulti(inputArray);

inputArray.forEach(sumAndMulti);

function sumAndMulti(item){
    itemSum += item;
    itemMulti *= item;
}

console.log(itemSum);
console.log(itemMulti);