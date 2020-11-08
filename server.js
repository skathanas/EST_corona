const express = require ('express');
const ejs = require ('ejs');
const app = express();
const axios = require ('axios');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
//?? kuidagi seotud selle views kaustaga
app.set('view engine', ejs);

app.get('/', (req, res) => {
    res.render('index.ejs', {algDate: '', tnDate: ''}); 
    
});
app.post('/', (req, res) =>{
    let today = new Date();
    let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    let url = 'https://api.thevirustracker.com/free-api?countryTimeline=EE';
    console.log(date)
    .then(function(response){
     // console.log(response.data[0]);
     // let countryObject = response.data[0];
     // kuupäev on võti
     console.log(date)
     //  res.render("index.ejs", {countryIndex: countryObject});
            
       
    })
    .catch(function(error){
        console.log(error);
    });

});
app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});
