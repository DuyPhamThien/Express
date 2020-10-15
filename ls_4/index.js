
const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "anhduy",
//   database : "test"
// });
var con =require('./views/mysql');
con.connect((err)=> {
  if (err) {return err;} 
});


const query1 = 'SELECT * FROM article';
app.get('/admin', (req, res) => {
  con.query(query1 , (err,results ) =>{
    if(err)
    {
      return res.send(err);
    }
    else
    {
      res.render('homes/home',{results});
    }
  });
  } 
 )


app.get('/home', (req, res) =>{
    res.render('admin/ad');
    var {title , body , footer , group} = req.query;
    var query2 = "INSERT INTO article (`title`,`body`,`footer`,`group`) VALUES ( '" + title +"','"+ body+"','"+ footer+"',"+ + group +")";
    con.query(query2 , (err , results) =>{
      if(err){
        console.log(err);
      }
      else{
        console.log('success');
      }
    })
    res.redirect('http://localhost:3000/admin');

})
app.get('/ok',(req,res)=>{
  res.render('admin/ok');
})
axios.get('http://localhost:3000/ok')
.then((response)=>{console.log(response.data)})
.catch((err)=>console.log(err))

  

app.listen(port, () => console.log(`Server listening on port ${port}!`))