let str = "123";

function mask(obj){
    let result = "";
    if(obj.length<=4){
        return obj
    }
    else{
        let n = obj.length;
        let remain = obj.substring(n-4);
        for(let i=0;i<n-4;i++){
            result+= '#';
        }
        result = result + remain
        return result
    }
}

console.log(mask(str))

// let arr = [1, 2, 3, 2, 4, 5, 5, 6, 7, 6, 8]

// function printDuplicates(obj){
//     let result = []
//     let mySet = new Set();
//     let dupSet = new Set();
//     for(let i=0;i<obj.length;i++){
//         if(!mySet.has(obj[i])){
//             mySet.add(obj[i]);
//         }
//         else{
//             if(!dupSet.has(obj[i])){
//                 result.push(obj[i])
//                 dupSet.add(obj[i])
//             }  
//         }
//     }
//     return result
// }

// console.log(printDuplicates([1,2,3,2, 2, 3, 2, 4, 5, 5, 6, 7, 6, 8]))











// import React from 'react'

// const practice = (props) => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default practice





// // let prom = new Promise((res, rej) => {

// import { useEffect, useState } from "react";

// // })

// // prom.then(function abc()).then(function def()).catch((err) => {
// //     console.log(err)
// // })


// const [arr,setArr] = useState(initialState);

// useEffect(()=>{
//     addEventListener(()=>{

//     })

//     return (()=>{

//     })
// })