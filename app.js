const express= require('express');
const bodyParser= require('body-parser');
const path = require('path');
const email = require('./email');


const app = express();

//MIDDLEWARE

//INTERPRETE DE JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');


//VIEWS FOLDER->
app.set('views',path.join(__dirname,'views'));


app.get('/',(req,res)=>{

res.render('index.html');

})


app.post('/form',(req,res)=>{

    const {nombre,e_mail} = req.body;
    console.log(nombre);
    email.enviarEmail("cristian.valdes@unah.hn",nombre,"");
    res.render('index.html');
    
    })


//SETTINGS

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Servidor iniciado");
});