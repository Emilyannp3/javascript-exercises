function removeFromArray(arr,num) {
let removedArrayIndex = arr;
return removedArrayIndex.slice(num);
};
removeFromArray([1, 2, 3, 4], 2);
// Do not edit below this line
module.exports = removeFromArray;
