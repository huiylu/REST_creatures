const EXPRESS=require('express');
const layouts=require('express-ejs-layouts');
const app=EXPRESS();
const path=require('path');

app.set('view engine', 'ejs');
app.use(layouts);
app.use(EXPRESS.static(path.join(__dirname, '/static')));
app.use(EXPRESS.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.render('home');
})

app.use('/dinos', require('./routes/dinos'));
app.use('/prehistoric', require('./routes/prehistoric'));

app.listen(8000);