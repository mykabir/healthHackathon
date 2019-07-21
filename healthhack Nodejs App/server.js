var express  = require("express");

 var mysql      = require('mysql');
 var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database : 'healthhack'
 });
 var app = express();
 bodyParser = require('body-parser')
var cookieSession = require('cookie-session')
var cookieParser = require('cookie-parser');
const querystring = require('querystring');
const multer = require('multer');
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({ storage : storage}).single('userPhoto');


app.set('trust proxy', 1)

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(cookieParser());
app.get('/login',function(req,res){
  res.render('index');
});
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 600000
}))

app.get('/',function(req,res){
  res.render('index');
});

app.get('/setup',function(req,res){
  res.render('Signup');
});


 connection.connect(function(err){
 if(!err) {
     console.log("Database is connected ... \n\n");  
 } else {
     console.log("Error connecting database ... \n\n");  
 }
 });

var qs = require('querystring');


app.get('/visitCount', function (req, res, next) {
  // Update views
  req.session.views = (req.session.views || 0) + 1

  // Write response
  res.end(req.session.views + ' views')
})

app.get('/setID', function (req, res, next) {

  res.cookie('email',  'abc').send('cookie is set');
})


app.get('/showID', function (req, res, next) {

  res.end(req.cookies['email'])
})


app.post('/signup',function(req,res){
  var body = '';
  req.on('data',function(chunk){
    body += chunk;
  });
  req.on('end',function(){
    var data = qs.parse(body);
    //res.writeHead(200);
    //res.end(JSON.stringify(data));
    console.log(data.email);
    console.log(data.pass);
    console.log(data.profession);
    var role =data.profession;
    var sql2 = 'SELECT * FROM users WHERE username="'+data.email+'" ';
    connection.query(sql2, function(err, row) {
      
      if(err) {
          res.end("error in database");
          console.log("error in database");
          return;
      } else {
          if (row && row.length ) {

              return res.redirect('/dashboard?email='+data.email+'&role='+role+'&fname='+data.fname+'&lname='+data.fname);

          } else {
          
              if(data.profession==0){
                  var sql2 = "INSERT INTO patients (fname, lname, dob, mobile, email) VALUES ('"+data.fname+"', '"+data.lname+"', '"+data.dob+"', '"+data.phoneNum+"', '"+data.email+"')";
                  
                  connection.query(sql2, function (err, result) {
                    if (err) throw err;
                    
                    console.log("patient inserted");
                  });
               }
               else if(data.profession==1){
                  var sql2 = "INSERT INTO doctors (dv1, dv2,  mobile, email) VALUES ('"+data.fname+"', '"+data.lname+"','" +data.phoneNum+"', '"+data.email+"')";
                  
                  connection.query(sql2, function (err, result) {
                    if (err) throw err;
                    
                    console.log("doctor inserted");
                  });
               }
               
               
                  var sql = "INSERT INTO users (username, password) VALUES ('"+data.email+"', '"+data.pass+"')";
                  connection.query(sql, function (err, result) {
                    if (err) throw err;
                    
                    req.session.email = data.email;
                    return res.redirect('/dashboard?email='+data.email+'&role='+role+'&fname='+data.fname+'&lname='+data.fname);
                    console.log("1 record inserted");
                  });
          }
      }
    });
    

      
  });
      


});


app.post('/login',function(req,res){
  var body = '';
  req.on('data',function(chunk){
    body += chunk;
  });
  req.on('end',function(){
    var data = qs.parse(body);
    //res.writeHead(200);
    //res.end(JSON.stringify(data));
    console.log(data.email);
    console.log(data.pass);
    var sql2 = 'SELECT * FROM users WHERE username="'+data.email+'" ';
    connection.query(sql2, function(err, row) {
      
      if(err) {
          res.end("error in database");
          console.log("error in database");
          return;
      } else {
          if (row && row.length ) {
              console.log(row);
              console.log(row[0].password);
              if(row[0].password == data.pass){
              
              
              
              
                return res.redirect('/dashboard?email='+data.email);
                //res.end("welcome "+data.email);
              
              }
              else{
                res.end("wrong password "+data.email);
                console.log('wrong password');
              }
              // do something with your row variable
          } else {
              res.end('wrong email address');
              console.log('wrong email address');
          }
      }
    });
    
  });
      


});



app.get('/dashboard',function(req,res){
  var email = req.query.email;
  var role = 'Doctor'
  console.log(email);
  res.render('dashboard',{
    name: email,
    role: role
  });

});

app.get('/addMed',function(req,res){
  var email = req.query.email;
  var role = 'patient'
  console.log(email);
  res.render('addMed',{
    name: email,
    role: role
  });

});
app.get('/doctors',function(req,res){
  var email = req.query.email;
  var role = 'patient'
  console.log(email);
  res.render('doctors',{
    name: email,
    role: role
  });

});

app.get('/records',function(req,res){
  var email = req.query.email;
  var role = 'patient'
  console.log(email);
  var sql2 = 'SELECT * FROM records WHERE rv1="'+email+'" ';
    connection.query(sql2, function(err, row) {
      
      if(err) {
          res.end("error in database");
          console.log("error in database");
          return;
      } else {
          if (row && row.length ) {
//              console.log(row);
              //var data = "<table><tr><th>Record Date</th><th>Medicine Name</th></tr>";  
              //var data2 ={med:[],date:[]};           
             // for(var key in row) {   
     
               //  if(row.hasOwnProperty(key)){
                // data += "<tr><td>" + row[key].rdate + "</td><td>" + row[key].medname + "</td></tr>"
                // data2.med.push(row[key].medname);
                // data2.date.push(row[key].rdate);
                 //console.log(data);  
                //}
                res.render('records',{
                name: email,
                role: role,
                data: row
              });
              //} 
              //data += "</table>"   
              //res.setHeader('content-type', 'text/html');﻿
                      
              
              
              // do something with your row variable
          } else {
              res.end('wrong email address');
              console.log('wrong email address');
          }
      }
    });
  

});

async function quickstart(fileName, fieldName) {
// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
// const fileName = 'Local image file, e.g. /path/to/image.png';

// Read a local image as a text document


const [result] = await client.documentTextDetection(fileName);
const fullTextAnnotation = result.fullTextAnnotation;
var res = fullTextAnnotation.text.split('\n');
var lineL=[];
for(var i =0; i<res.length;i++)
{
  var temp = res[i].toLowerCase();
  var regex = /[0-9][mM]/g
  if(temp.match(regex))
  {
    if(i+1<res.length)
      lineL.push(res[i]+" ");
  }
}
//console.log(lineL);
var pillName =[];
//var dosage = [];
var directions = [];
var pillNum = 10;
for(var i =0; i<lineL.length;i++)
{
  for(var j=0; j<lineL[i].length; j++)
  {
    //console.log(lineL[i].charAt(j));
    if(!isNaN(parseInt( lineL[i].charAt(j),10)))
    {
      
      var temp2=lineL[i].substring(j,lineL[i].length);

      //dosage.push(temp2.substring(0,temp2.indexOf(" ")));
      if(j>3)
      pillName.push(lineL[i].substring(0,j-1)+" "+temp2.substring(0,temp2.indexOf(" ")));
      //directions.push(temp2.substring(temp2.indexOf(" ")+1, temp2.indexOf("//")));
      //pillNum = parseInt(lineL[i].substring(lineL[i].indexOf("//")+2,lineL[i].length));
      break;
    }
  }

}
console.log(pillName);
//console.log(dosage);
//console.log(directions);
//console.log(pillNum);
//console.log(`Full text: ${fullTextAnnotation.text}`);

    var sql = "INSERT INTO records (medname, rv1) VALUES ('"+pillName+ "', '"+fieldName+"')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    
    
    console.log("1 record inserted");
    
  });

}



app.post("/file",function(req,res){
    var storage = multer.diskStorage({
        destination: 'temp/'
    });
    var upload = multer({ storage : storage}).any();

    upload(req,res,function(err) {
        if(err) {
            console.log(err);
            return res.end("Error uploading file.");
        } else {
           console.log(req.body);
           req.files.forEach( function(f) {
             console.log(f);
             // and move file to final destination...
              quickstart(f.path,f.fieldname);
              
              var email = f.fieldname;
              var role = 'patient'
              res.render('success',{
              name: email,
              role: role
              });
           });
           
          // res.end("File has been uploaded");
          
        }
    });
});









app.listen(6125,function(){
  console.log('Example app listening on port 6125!');
});
