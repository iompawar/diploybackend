import express from 'express'
import dotenv from 'dotenv';
import Router from './Routes/routes.js';


const app = express();
dotenv.config();


app.use('/', Router);
app.listen(process.env.PORT, ()=>{
    console.log(`App listening ${process.env.PORT}`);
})