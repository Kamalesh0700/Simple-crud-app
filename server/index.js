const express=require('express');
const app=express();
const mysql=require("mysql");

const db=mysql.createConnection({
    user:'root',
    password:'',
    root:'root',
    database:'employee',

});

app.post("/create", (req, res) => {

  const name=req.body.name;
  const age=req.body.age;
  const salary=req.body.salary;
  const place=req.body.place;
  const role=req.body.role;

  db.query('INSERT into employee (name,age,salary,place,role ) VALUES (?,?,?,?,?)', 
  [name,age,salary,place,role] (err ,))

});


app.listen(3001, () => {
  console.log("running");
} )