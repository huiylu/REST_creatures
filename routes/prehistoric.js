const express=require('express');
const router=express.Router();
const fs=require('fs');

router.get('/', (req, res)=>{
    //res.send('Dino');
    let prehistoric = fs.readFileSync('./prehistoric.json');
    let prehistoricData=JSON.parse(prehistoric);
    console.log(prehistoricData);
    res.render('prehistoric/index',{prehistorics:prehistoricData });
});

router.get('/new',(req,res)=>{
    res.render('prehistoric/new');
})

router.post('/',(req,res)=>{
    let prehistoric= fs.readFileSync('./prehistoric.json');
    console.log(req.body);
    prehistoricJS=JSON.parse(prehistoric);
    prehistoricJS.push(req.body);
    let prehistoricJSON=JSON.stringify(prehistoricJS);

    fs.writeFileSync('./prehistoric.json', prehistoricJSON);
    res.redirect('/prehistoric');
});

module.exports = router;

