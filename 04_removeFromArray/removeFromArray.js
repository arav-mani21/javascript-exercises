const removeFromArray = function(arr,...nums) {
    for(let num of nums){
        let indexOfNum = arr.indexOf(num)
        while(indexOfNum > -1){
            arr.splice(indexOfNum,1)
            indexOfNum = arr.indexOf(num)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
