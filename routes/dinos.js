const express=require('express');
const router=express.Router();
const fs=require('fs');

router.get('/', (req, res)=>{
    //res.send('Dino');
    let dinos = fs.readFileSync('./dinos.json');
    let dinoData=JSON.parse(dinos);
    console.log(dinoData);
    res.render('dinos/index',{dinos:dinoData });
});

router.get('/new',(req,res)=>{
    res.render('dinos/new');
})

router.post('/',(req,res)=>{
    let dinos= fs.readFileSync('./dinos.json');
    console.log(req.body);
    dinosJS=JSON.parse(dinos);
    dinosJS.push(req.body);
    let dinoJSON=JSON.stringify(dinosJS);

    fs.writeFileSync('./dinos.json', dinoJSON);
    res.redirect('/dinos');
});

module.exports = router;

