var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

var cors = require('cors');
app.use(cors({origin: 'http://localhost:4200'}));

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
  
  
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'garments_management'
});
  
// connect to database
dbConn.connect(); 
//login validation
app.post("/login",function(req,res)
{
    let username = req.body.username;
    let password = req.body.password;
    if(!username)
    {
        return res.status(400).send({error:true,message:"Please input username and password"});
    }

    dbConn.query(`select name,username from user where username="${username}" and password="${password}"`
    , function (error, results, fields)
        {
           // console.log("result length: "+results.length);
           // console.log("error "+error);
            if(error)
            {
                return res.send({error:true,data:results,message:error});
            }
            if(!results.length || results.length==0)
            {  
                console.log("user not found");
                return res.send({error:true,data:[],message:"user not found!"});
            }
            if (results.length) {
                console.log("user found");
                return res.send({error:false,data:[],message:"success"});
            }
            //console.log(results);
            //console.log(fields);
            
        });
    //console.log(results);
});

app.get("/vendorList",function(req,res)
{
    dbConn.query(`select * from vendor`, function (error, results, fields)
        {
            //console.log(results);
            return res.send({error:false,data:results,message:"success"});
        });
});

app.post("/editVendor",function(req,res)
{
    //console.log(req);
    let vid = req.body.vid;
    let name = req.body.name;
    let phone = req.body.phone;
    let address = req.body.address;
    dbConn.query(`update vendor set name='${name}',phone='${phone}',address='${address}' where vid='${vid}';`, function (error, results, fields)
        {
            if(error)
            {
                return res.send({error:true,data:results,message:error});
            }
            return res.send({error:false,data:results,message:"success"});
        });
});

app.post("/deleteVendor",function(req,res)
{
    let vid = req.body.vid;
    //console.log(vid);
    dbConn.query(`delete from vendor where vid="${vid}"`,function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });
});

app.post("/addVendor",function(req,res)
{
    let name = req.body.name;
    let phone = req.body.phone;
    let address = req.body.address;
    dbConn.query(`insert into vendor (admin_id,name,phone,address) values(0,'${name}','${phone}','${address}')`,function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
