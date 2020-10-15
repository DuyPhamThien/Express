const express = require('express');

const app = express();
const port = 3000;

var userRouter = require('./routers/user.router'); // require Router



app.set('view engine','pug'); // sử dung template ejs(pug)
app.set('views','./views'); // bắt đầu đầu mục = views rồi tiếp theo sử dụng ko cần views ở đầu nữa(vd :/views/test => test )

app.use(express.static('public')); // các mục static ở mục public về sau ko cần public

app.get('/', (req, res) => res.send('<div>tets</div>'));
// app.get('/home', (req, res) => {
//     res.render('index',{ name: 'duy'});
// });
// app.get('/home/:id', (req, res) => {
//         var i = req.params.id;
//         res.send('Home' + i);
//     } );
app.get('/test' , (req,res) =>{
    res.render('test');
});
app.get('/test1' , (req,res) =>{
    res.render('test1');
});

app.use('/user', userRouter);// những thằng nào bắt đầu = user thì tìm ở useRouter

app.listen(port, () => console.log(`Sever listening on ${port}!`)) ;


