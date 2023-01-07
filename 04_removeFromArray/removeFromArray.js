t
//declare an unknown array
//get random argument out of array using index
//return array without argument

function removeFromArray( arr, num) {
    let randomArray = []; 
    for(i=0; i < arr.length ; i++){
        if(arr[i] != num){
            randomArray.push(arr[i]);
            
        }else{
            console.log(num);
        }
    };
    return randomArray;
    };
    removeFromArray([1, 2, 3, 4], 3);
    // Do not edit below this line
    module.exports = removeFromArray;
