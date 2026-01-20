// const { resolve } = require("path")


// Create a script which has two methods that return promises - One of the promises should get reolved after 6 seconds timeout and the other one after 3 seconds timeout. Call the promise in such a way that the second promise is invoked after the first promise is resolved.
//call by writing 'node file.js'

let mypromise1 = new Promise ((resolve,reject ) =>
{
    setTimeout(()=>
    {
        resolve("Promise 3000 resolved")
    },3000)
})

let mypromise = new Promise ((resolve,reject ) =>
{
    setTimeout(()=>
    {
        resolve("Promise 6000 resolved")
        
    },6000)
})


mypromise.then((successMessage)=>
{
    console.log("from callback "+ successMessage)
    mypromise1.then((successMessage)=>
{
    console.log("from callback "+ successMessage)
})
})


.catch((err)=>
{
    console.log("error")
})

