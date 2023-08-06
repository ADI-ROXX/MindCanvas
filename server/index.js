import express from 'express';
import Connection from './database/db.js';
import dotenv from "dotenv";
import router from './router/routes.js';
import cors from "cors";

const app = express();



import bodyParser from 'body-parser';
const jsonParser = bodyParser.json({extended: true,limit:"50mb"});


app.use(jsonParser); // use it globally
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();
app.use(cors());

app.use('/',router) ; {/* '/' means that after localhost:8000/login, then signupUser will be called because that is the 
                        endpoint for the router
                        Had we used '/api/auth' insteal of '/', then signupUser will be called
                        when we called the route http://localhost:8000/api/auth/login

                    */}

             
const PORT=process.env.PORT||8000;

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
});

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;


Connection(username,password);
