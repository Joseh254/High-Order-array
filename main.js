// .FOR EACH
const names = ['joseph','victory','phyllis','edwin','lenox']

names.forEach(
    
    function getCurrentNames(currentName){
        // returns names that we passed to names variable
console.log(currentName);
})
// **********************************************************

// .MAP
const numbers = [1,2,3,4,5]

const newnumber = numbers.map(
    function(number){
    return number+3;
    // retuns aumbers that are added 3 to them
    
})
console.log(numbers)
console.log(newnumber)
// **********************************************************
// FILTER
const emails = ['jose@gmail.com','jane@gmail.com','emma@gmail.com']

const emailsStartingWithJ= emails.filter(
    function (getemails){
        // gets emails stating with j
return getemails[0]==="j"
    }
)
console.log(emailsStartingWithJ);

// **********************************************************
// REDUCE
const numberss = [1,2,3,4,5]

const sumofNumbers=numberss.reduce(
    function demonstrateReduce (initialnumber,nextnumber){
return initialnumber+nextnumber;
    }
)

console.log(sumofNumbers);

// *********************************************************
// SOME
// return true if at least one passes the condition of function
const grades = ['A','B','C','D']

const checkifaGradeExists = grades.some(
    function check(checking){
        return checking ==="F"// retuns false since there was no grade F
    }
)
console.log(checkifaGradeExists)
// *********************************************************
//EVERY
const newGrades = ['A','A','A','A']
const age = [45,50,56]

const checkifallpassescondition = newGrades.every(
    function verifyinggrades(verify){
return verify=='A'

    }
    

)



const ageverify = age.every(
    function verifyingage(verifyingtheage){
        return verifyingtheage==='50'
    }
)


console.log(checkifaGradeExists);
console.log(ageverify);
// *******************************************
//FIND
//returns first element passing the condition of a function
const ourNumbers= [1,2,4,6,8]

const newournumbers = ourNumbers.find(
    function finding(findit){
return findit%2==0
    }
)
console.log(newournumbers)