const findTheOldest = function(people) {
    ages = people.map(person => {
        if(!person.yearOfDeath)
            return 2025 - person.yearOfBirth
        else
            return person.yearOfDeath - person.yearOfBirth
    })
    let oldestPersonIndex = 0
    console.log(ages)
    for(let i = 0; i < ages.length; i++){
        if(!ages[i])
            continue
        if(ages[i] > ages[oldestPersonIndex] || !ages[oldestPersonIndex])
            oldestPersonIndex = i
    }
    return people[oldestPersonIndex]
};

// Do not edit below this line
module.exports = findTheOldest;
