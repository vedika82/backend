// This server branches and the requests based on the end points and uses routers to handle them. All the /user endpoints are handled by userRouter and /item endpoints are handled by itemRouter.


const express = require('express');
const app = new express();

var userRouter = express.Router()
var itemRouter = express.Router()

app.use("/item",itemRouter)
app.use("/user",userRouter)

userRouter.get("/about/:id",(req,res)=>{
    res.send("Response about user "+req.params.id)
})

userRouter.get("/details/:id",(req,res)=>{
    res.send("Details about user "+req.params.id)
})

itemRouter.get("/about/:id",(req,res)=>{
    res.send("Information about item "+req.params.id)
})

itemRouter.get("/details/:id",(req,res)=>{
    res.send("Details about item "+req.params.id)
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})


//INSTRUCTIONS:
// You should see output which says Listening at http://localhost:3333.
// In the second terminal window, use the following curl command.
// curl localhost:3333/item/1
// You should see output which says Item 1 last enquiry Fri Nov 20 2020 15:17:46 GMT+0530 (India Standard Time).

// In the second terminal window, use the following curl command.
// curl localhost:3333/user/1
// You should see output which says User 1 last successful login Fri Nov 20 2020 15:19:52 GMT+0530 (India Standard Time).
