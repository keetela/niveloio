
import express from 'express';

import morgan from 'morgan';

import bodyParser from 'body-parser';

const app = express();

app.use(express.json());

app.use(morgan('dev'));
import cors from 'cors';
app.use(cors());


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// index of 
app.get("/", (req,res) => {
    res.status(200).send({
        message:"Welcome to NIVELO.io Platform."
    })
})


export default app;