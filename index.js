const users = [
    {
        id:1,
        name: "Jack",
        isActive: true,
        marks:70,
    },
    {
        id:2,
        name: "John",
        isActive: false,
        marks:36,
    },
    {
        id:3,
        name: "Mike",
        isActive: true,
        marks:45,
    }
 ]

// reverse and array of integer
/* let arrray1 = [1,2,3,4,5,6,7];
 let arrayReverse = arrray1.reverse();
 let reverseArray = arrray1.map((i,idx) => arrray1(arrray1.length -1 -idx))
 console.log(reverseArray); */

 //add more elements to differ elements to array
 /*const numbers = [1,2];
 const number1 = [3,4,5];

 const newArray = [...numbers,...number1]
 console.log(newArray); */

 //find square of number
 /*const square = x => x*x;
 console.log(square(5));*/

 // concatenate 2 array
 /*const mergeArrays = (arr1,arr2) => {
    return arr1.concat(...arr2,...arr3);
    return [...arr1,...arr2,...arr3];
 }
 const arr1 = [1];
 const arr2 = [2,3];
 const arr3 = [6,90,8];
 const result = mergeArrays(arr1,arr2);
 console.log(result,arr1,arr2); */

 
 // check if name exist or not
 // first method
/*const isNameExists = (name,users) => users.some(user => user.name === name)
console.log(isNameExists("hn",users));*/

// second method
/*const isNameExists = (name,users) => {
    const user = users.find((user) => user.name === name);
    return Boolean(user);
}
console.log(isNameExists("Jack",users)) */

//Remove all duplicate numbers
/*const uniqueArr = (arr) => {
    return [...new Set(arr)]
} */

//second method
/*const uniqueArr = (arr) => {
    const result = [];
    arr.forEach((item) => {
        if (!result.includes(item)) {
            result.push(item);
        }
    });
    return result;
}
console.log(uniqueArr([1,2,4,4])); */
//third
/*const uniqueArr = arr => {
    return arr.reduce((acc,el) => {
        return acc.includes(el) ? acc : [...acc,el]
    },[]);
}
console.log(uniqueArr([1,2,4,4]));*/

///sort array
//for array
/*const arr = [3,5,1];
const result = arr.sort((a,b) => a-b);
console.log(result); */


// for object
/*const books = [
    {name:"Harry Potter", author: "Jaane Rowling"},
    {name:"Warcross", author: "Marie Lu"},
    {name:"The Hunger Games", author: "Suzanne Collins"},
];
books.sort((book1,book2) => {
    const authorLastName1 = book1.author.split(" ")[1];
    const authorLastName2 = book1.author.split(" ")[1];
    return authorLastName1 < authorLastName2 ? -1 : 1;
})
console.log(books); */

//write function which implement range

//range
//first
/*const range = (start,end) => {
    const result = [];
    for (let i = start; i<=end;i++) {
        result.push(i);
    }
    return result;
}
console.log(range(1,50)); */
//second
/*const range = (start,end) => {
    return [...Array(end - start)].map((el) => el + start)
}*/

//write a function which implements shuffle
/*const shuffleItems = items => {
    return items
    .map(item => ({sort: Math.random(), value:item}))
    .sort((item1,item2) => item1.sort-item2.sort)
    .map((a) =>a.value)
}
console.log(shuffleItems([1,2,7,8,5])) */

// find the number of occurance of minimum value in the list
/*const arr = [1,2,3,1];
const minValue =  Math.min(...arr);
const minArr = arr.filter(el => el === minValue);
console.log(minArr.length); */

//Fetch Api

/*fetch("https://api.github.com/users/gaearon/repos")
.then((res) => res.join())
.then((data) => {
    console.log("success",data);
})*/

//   Design a function which returns a fibonacci sequence.
//the fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the nect term is defind as the sum of the previous two terms hence the nth term is the sum of (n-1)th term and (n-2)th term.
// 0,1,1,2,3,5,8,13,21,34,55,89,144
/*const fibonacci = n => {
    if (n < 2 ) {
        return 1;
    } else {
        return fibonacci(n -2) + fibonacci(n-1);
    }
}*/

// Palindrom
//word, phrase, or sequence that reads the same backwards as forwards.
/*const isPalindrome = (str) => {
    return str === str.split("").reverse().join();
}*/

//anagram
/*const isAnagram = (str1,str2) => {
    if (str1.length !== str2.length){
        return false;
    }
    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();

    if (lowerStr1 === lowerStr2) {
        return false;
    }

    const sortedStr1 = lowerStr1.split("").sort().join("");
    const sortedStr2 = lowerStr2.split("").sort().join("");

    return sortedStr1 === sortedStr2;
}

console.log(isAnagram('ram','mfr'));*/

//count vowels in string
/*const findVowels = str => {
    const vowels = ["a","e","i","o","u"];
    //first
    /*let count= 0;
    for (let char of str.toLowerCase()) {
        if(vowels.includes(char)) {
            count++;
        }
    }
    return count; */
    /*return str
    .toLowerCase()
    .split("")
    .reduce((acc,char) => {
        return vowels.includes(char) ? acc+1 : acc;
    },0)
}
console.log(findVowels('yhjdduye')) */

//find duplicates

/*let strArray = [ "q", "w", "w", "w", "e", "i", "i", "u", "r"];
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)

console.log(findDuplicates(strArray)) // All duplicates
console.log([...new Set(findDuplicates(strArray))]) // Unique duplicates*/


/*   map,filter,reduce */

//const nums = [1,3,7,5];
/*const multiplyThree = nums.map((num) => num*3);
console.log(multiplyThree);*/

/*const moreThenTwo = nums.filter((num) => {
    return num > 6;
})
console.log(moreThenTwo); */

/*const sum = nums.reduce((acc,curr,i,arr) => {
    return acc + curr;
},0);

console.log(sum); */

//ques: get only names from the array

/*const nameInCapital = users.map((user) => {
    return user.name.toUpperCase();
});
console.log(nameInCapital); */

/*let userName = [];
for(let i = 0; i < users.length; i++) {
    let nameValue = users[i].name.toUpperCase();
    userName.push(nameValue);
}
console.log(userName); */

/* ques: get marks more then 60; */
/*let userMarks = [];
for(let i = 0; i < users.length; i++) {
    let markValue = users[i].marks;
    markValue > 60 ? userMarks.push(markValue) : "" ;
}
console.log(userMarks); */

/*const filterValue = users.filter((user) => user.marks > 60);

console.log(filterValue);*/

/*ques: sum of all the marks */

/*const sumOfMarks = users.reduce((acc,curr) => acc + curr.marks,0);
console.log(sumOfMarks);*/
/*const nums = [1,3,7,5];
let SumOfValues = 0;
for (let i = 0; i< users.length;i++) {
    SumOfValues += users[i];
}
console.log(SumOfValues); */

/*const checkFilter = users.filter((user) => user.marks > 50 ).map((user) => user.name);
console.log(checkFilter); */

// Rern total marks fo students with marks greater then 60 after 20 marks has been added to those who scored less then 60

/*const checkFilter = users.filter((user) => user.marks < 60 ).map((data) => {
        data.marks += 20;
        return data;
    });
const totalMarks = users.filter((user) => user.marks > 60).reduce((acc,cur) => {return acc+cur.marks},0);
    
console.log(totalMarks); */


/* Variable shadow*/

/*IIFE example */
/*(function square(num){
    console.log(num*num);
})(5);

((num) => {
    console.log(num*num);
})(5) */


//console.log("hello");

function createOrder() {
    console.log("data")
}

createOrder();


