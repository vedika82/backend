// const { resolve } = require("path")
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

