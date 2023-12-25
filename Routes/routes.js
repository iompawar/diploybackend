import express from 'express'
const Router = express.Router();

Router.get('/', (req,res)=>{
    res.send("<h1>Home</h1>")
})

export default Router;