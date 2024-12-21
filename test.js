// // Q.1 Write a code to get array of names from given array of users
// // Get back only active users
// // sort user by age in desnding order
const users =
    [
        {
            id: 1,
            name: "Jack 12",
            age: 12,
            isActive: true
        },
        {
            id: 2,
            name: "John 5",
            age: 5,
            isActive: false
        },
        {
            id: 3,
            name: "Mike 2",
            age: 2,
            isActive: true
        },
        {
            id: 4,
            name: "tim 15",
            age: 15,
            isActive: true
        },
    ]

// /////////////////// using For loop
// // users.sort((user1,user2)=>(user1.age<user2.age?-1:1))
// // let nameArr = []
// // for(let i=0; i < users.length ; i++){
// //     users[i].isActive === true && nameArr.push(users[i].name)
// // }

// /////////////////// using map

let nameArr = users.filter(user => user.isActive === true)
.sort((a, b) => (a.age < b.age ? -1 : 1))
.map(user => user.name)

console.log("nameArr", nameArr)

// ------------------------------------------------------------------------------------------------------------------------------

// Q.2 What will be logged in first example and in second example
// let var1;
// console.log(var1)           // undefined
// console.log(typeof var1)    // undefined

// let var2 = null;
// console.log(var2)           // null
// console.log(typeof var2)    // object

// ------------------------------------------------------------------------------------------------------------------------------
// Q.3 What will be console.logged here [Hoisting]
// console.log(foo) // ReferenceError: foo is not defined
// foo = 1  

// console.log(foo) // undefined
// var foo = 2

// foo = 3
// console.log(foo) // 3
// var foo

// console.log(foo) // ReferenceError: Cannot access 'foo' before initialization
// const foo = 2

// ------------------------------------------------------------------------------------------------------------------------------
// // Q.4 Create a counter function which has increment and getVlaue functionality [Closure]
// // Closure : closure means that we have access inside of a function to the outside scope.
// const privateCounter = () =>{
//     let count = 0
//     return {
//         increment:(val = 1)=>{
//             count += val
//         },
//         getValue:()=>{
//             return count;
//         }
//     }
// }

// const counter = privateCounter();
// console.log(counter.getValue())
// counter.increment();
// console.log(counter.getValue())
// ----------------------------------------------------------------------------------------------------------------------
// // Q.5 write a function which help to achive multiply(a)(b) and returns product of a and b 
const multiply = (num1)=>{
    return (num2) =>{
        return num1 * num2
    }
}
// console.log(multiply(2)(3))

    // // create a curry function
    // A simple curry function takes a function with multiple arguments and transforms it into a series of functions that each take a single argument.

    // -----
    // function add(func){
    //     return function calculateArguments(...args){
    //         if(args.length>=func.length){
    //             return func(...args)
    //         }else{
    //             return (...nextArgs)=> calculateArguments(...args , ...nextArgs)
    //         }

    //     }
    // }
    // const curriedFunc = add((a,b,c)=>a+b+c)
    // -----
    // const curriedFunc = a => (b,c )=> a+b+c

    // console.log(curriedFunc(2)(2,3))
//     // curry function real world project

//     const get = curry((property , object) => object[property])
//     const getId = get("id")
//     // console.log(getId({id:13}))

//     const map = curry((fn , values)=> values.map(fn))
//     const getIds  = map(getId)
// console.log(getIds([{id:12},{id:13}]))
// ------------------------------------------------------------------------------------------
// // Q.6 write a function which get's an array and an element and returns a array with this element at the end
// const append = (arr ,el) =>{
//     // arr.push(el)
//     // return arr
//     return [...arr , el]
// }
// console.log(append([1,2],3))
// ------------------------------------------------------------------------------------------
// // Q 7 write a function to concentrate 2 arrays 
// const mergeArray = (arr1 ,arr2) =>{
//     // return arr1.concat(...arr2)
//     return [...arr1 ,...arr2]
// }
// console.log(mergeArray([1,2],[3,4]))
// ------------------------------------------------------------------------------------------
//  // Q 8 Check that user with such name is exist or not  in array of object

// const users = [
//     {
//         id:1,
//         name:"Jack",
//         isActive:true
//     },
//     {
//         id:2,
//         name:"John",
//         isActive:true
//     },
//     {
//         id:3,
//         name:"Mike",
//         isActive:false
//     }
// ]

// // const isNameExist = (name ,users) => users.some(user =>  user.name === name)

// // const isNameExist = (name ,users) => Boolean(users.find(user=>user.name === name))

// const isNameExist = (name ,users) => users.map(user=>user.name === name)

// // const isNameExist = (name ,users)=>{
// //     let exist = false
// //     for(let i = 0 ; i < users.length ; i++){
// //         if(users[i].name === name ){
// //             exist = true
// //         }
// //     }
// //     return exist
// // }

// console.log(isNameExist("Jack", users))

// ------------------------------------------------------------------------------------------
//  // Q 9 Remove all duplicate in array 

// const removeDuplicate = (arr) =>{
//     return [...new Set(arr)]
// }

// const removeDuplicate = (arr)=>{
//     let result = []
//     arr.map(item=>!result.includes(item)&&result.push(item))
//     return result
// }

// const removeDuplicate = (arr) =>{
//     return arr.reduce((acc , el)=>{
//         return acc.includes(el)?acc:[...acc,el]
//     },[])
// }

// console.log(removeDuplicate([1,2,3,2,3]))

// ------------------------------------------------------------------------------------------
// //  // Q 9 Sort in array 
// //  Sort array of objects by author last name

// // console.log([3, 5,1,3].sort((a,b)=>a<b?1:-1))

// const books = [
//     {name:"Harry potter" , author:"Joanne Rowling"},
//     {name:"Warcross" , author:"Marie Lu"},
//     {name:"The Hunger Games" , author:"Suzanne Collins"}
// ]

// books.sort((books1 , books2 )=>{
//     const authorLastname1 = books1.author.split(" ")[1];
//     const authorLastname2 = books2.author.split(" ")[1];
//     return authorLastname1 < authorLastname2 ?-1:1;
// })

// console.log(books)

// ------------------------------------------------------------------------------------------
// // Q 10 Write a function for range

// const range = (start ,end)=>{
//     // const result = []
//     // for (let i =start ;i<=end ;i++){
//     //     result.push(i)
//     // }
//     // return result

//     const resArray = [...Array(end-start).keys()].map(el=>el+start)
//     return resArray;
// }



// console.log("range",range(2,5))

// ------------------------------------------------------------------------------------------
// // // Q 11 Writing a shuffle function

// const shuffleItems = (items)=>{
//     // return items.map((item)=>({sort:Math.random(),value:item}))
//     // .sort((item1,item2)=>item1.sort -item2.sort)
//     // .map(a=>a.value)

//     items.map((item,i)=>{
//         const j = Math.floor(Math.random()*(i+1));
//         [items[i],items[j]] = [items[j], items[i]] 
//     })
//     return items
// }

//     console.log(shuffleItems([1,2,3,4,5,6]))

// ------------------------------------------------------------------------------------------
// //  Q 12 find the number of occurance of minimum value in list

// const minoccurance = (array) =>{
//     const minValue = Math.min(...array)
//     const minArr = array.filter(el=>el ===minValue)
//     return minArr
// }

// console.log(minoccurance([1,2,3,4,5,6,1,1,3]))

// ------------------------------------------------------------------------------------------
// // Q 13 find the number of occurance 

// const occurance = (array)=>{
//     // return array.reduce((acc,num)=>{
//     //     acc[num]= (acc[num]||0)+1
//     //     return acc;
//     // },{})

//     const result ={}
//     array.map(num=>{
//         result[num] = (result[num]||0)+1
//     })
//     return result
// }

// console.log(occurance([1,2,3,4,5,6,1,1,3]))
// ------------------------------------------------------------------------------------------
// // Q14 debounce


// ------------------------------------------------------------------------------------------
// // Q15 Throtelling


// const fruits = ["apple","banana","orange","orange","apple"]
// const count = fruits.reduce((accumulator , fruit)=>{
//     accumulator[fruit] = (accumulator[fruit]||0)+1;
//     return accumulator
// },[])

// console.log(count)


// let arr = ["banana" , "apple" ,"apple","car"]

// const res = arr.reduce((accumalator,currentValue)=>{
//     accumalator[currentValue]= (accumalator[currentValue]||0)+1
//     return accumalator
// },[])
// console.log(res)

// function outer(){
//     let count = 0;
//     return function iner(){
//         count++
//         return count
//     }
// }

// const increment = outer();
// console.log(increment())
// console.log(increment())

// function * countup(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const counter = countup();
// console.log("test 1",counter.next())
// console.log("test 2",counter.next())
// console.log("test 3",counter.next())

