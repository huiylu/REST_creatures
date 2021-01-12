const { Console } = require('console');
const express=require('express');
const router=express.Router();
const fs=require('fs');

let prehistoric = fs.readFileSync('./prehistoric.json');
let prehistoricData=JSON.parse(prehistoric);

router.get('/', (req, res)=>{
    //res.send('Dino');
    
    console.log(prehistoricData);
    res.render('prehistoric/index',{prehistorics:prehistoricData });
});



router.get('/new',(req,res)=>{
    res.render('prehistoric/new');
})

router.post('/',(req,res)=>{
    //let prehistoric= fs.readFileSync('./prehistoric.json');
    console.log(req.body);
    prehistoricData=JSON.parse(prehistoric);
    prehistoricData.push(req.body);
    let prehistoricJSON=JSON.stringify(prehistoricData);
    console.log(prehistoricJSON);
    fs.writeFileSync('./prehistoric.json', prehistoricJSON);
    res.redirect('/prehistoric');
});


router.get('/:id', (req,res)=>{
    console.log(req.params.id);
    console.log(prehistoricData[req.params.id]);
    res.render('prehistoric/show', {prehistorics: prehistoricData[req.params.id]});
});



module.exports = router;

