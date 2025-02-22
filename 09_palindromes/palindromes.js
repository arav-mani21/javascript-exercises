const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^\w]/g,"")
    let i = 0
    while (i <= Math.ceil(str.length/2)){
        if(str.charAt(i) != str.charAt(str.length-i-1))
            return false
        i++
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
