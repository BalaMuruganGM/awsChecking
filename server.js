const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host : 'myapi',
    user : 'root',
    password : 'bala1234',
    database : "attance"
});

db.connect((error)=>{
    if(error){
        console.log("it is error"+error);
    }else{
        console.log("database connect success");
    }
});


app.get('/get' , function(req ,res){
    const query = "select * from at1";
    db.query(query , (error , result)=>{
        if(error){
            res.send({message : "data not get" , data : error});
        }else{
            res.send({message : "Data send success" , data : result});
        }
    })
});

app.listen(5300 , (error)=>{
    if(!error){
        console.log("port is run success");
    }else{
        console.log("port cannot run"+error);
    }
});

