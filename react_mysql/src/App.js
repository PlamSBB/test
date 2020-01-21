const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reactsql'
});

db.connect();

app.get('/data', function(req,res){
var sql = 'SELECT * FROM users';
db.query(sql, (err, result)=>{
    if(err) throw err;
    console.log(result);
    res.send(result);
});
});

app.put('/data', function(req, res) {

    var sql = 'UPDATE users SET firstname= ? , lastname = ? , villageID = ? , villageName = ? , Subdistrict = ? , District = ? , Province = ? , zipcode = ? WHERE userid = ?';
    db.query(sql,[req.body.firstname,req.body.lastname,req.body.villageID,req.body.villageName,req.body.Subdistrict,req.body.District,req.body.Province,req.body.zipcode,req.body.userid],function (error, results) {
        if(error) throw error;
        res.send(JSON.stringify(results));
  });
});

app.post('/data', function(req, res){
	console.log(req.body); 
    var data = {
      userid:req.body.userid,
      firstname:req.body.firstname, 
      lastname:req.body.lastname, 
      villageID:req.body.villageID,
      villageName:req.body.villageName,
      Subdistrict:req.body.Subdistrict,
      District:req.body.District,
      Province:req.body.Province,
      zipcode:req.body.zipcode
    };
    var sql = 'INSERT INTO users SET ?';
    db.query(sql, data, (err, result)=>{
    if(err) throw err;
    console.log(result);
  });
    res.send({
        status: 'Data sukses diinput!',
        no: null,
        userid:req.body.userid,
        firstname:req.body.firstname, 
        lastname:req.body.lastname, 
        villageID:req.body.villageID,
        villageName:req.body.villageName,
        Subdistrict:req.body.Subdistrict,
        District:req.body.District,
        Province:req.body.Province,
        zipcode:req.body.zipcode
	});

});

/*app.get('/edit',(req,res)=>{
  var sql = "UPDATE users set firstname= '+req.body.firstname+' WHERE userid = '+req.body.userid+' ";
  db.query(sql,function (error, results) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});*/


app.listen(3200, ()=>{
    console.log('3200')
});

