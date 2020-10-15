const express = require('express')
const app = express()
const port = 3000


require('./helper/defaul.js');
require('./lang/lang.js');


app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));


app.get('/', (req, res) => 
    res.render('homes/home')
)

app.listen(port, () => console.log(`Server listening on port ${port}!`))