const express = require('express');
var bodyParser = require('body-parser')

const app = express();
const port = 3000;

app.set('view engine','pug');
app.set('views','./views');
var urlencodedParser = bodyParser.urlencoded({ extended: false })


var users = [
    {id: 1 , name: 'Duy'},
    {id: 2, name: 'Huy'},
    {id: 3, name: 'Nam'},
    {id: 3, name: 'Name'}
];

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/home', (req, res) => {
    res.render('index',{ name: 'duy'});
});
app.get('/home/:id', (req, res) => {
        var i = req.params.id;
        res.send('Home' + i);
    } );
app.get('/user',(req,res) =>{
    res.render('users/user' ,{
        users : users
    } )
});
app.get('/user/search',(req,res) =>{
    var q = req.query.q ;
    var filter = users.filter( (user)=>
      user.name.indexOf(q) !== -1
    );
    res.render('users/user',{
        users : filter
    } )
});
app.get('/user/create',(req,res) => {
    res.render('users/create');
});
app.post('/user/create',urlencodedParser,(req,res) => {
    users.push(req.body);
    res.redirect('/user');
});

app.listen(port, () => console.log(`Sever listening on ${port}!`)) ;