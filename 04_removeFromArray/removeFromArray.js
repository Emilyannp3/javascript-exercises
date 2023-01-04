//declare an unknown array
//take out specific index of array
//return array without specific index
function removeFromArray([],num) {
let randomArray = [].slice(num);
return randomArray;
};
removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
