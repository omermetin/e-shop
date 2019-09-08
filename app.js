const express = require('express');
const path = require('path');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app_server/views'));

const routeShop = require(path.join(__dirname,'./app_server/routes/router')); 
// alttaki satiri kullanmaz ve obur tarafta parametre vermezsek yukaridaki require('./shopController')(); boyle kullan yine calismazsa yukaridaki gibi path.join ekle
// const ctrlObj = ctrlShop('yaziekle');

app.use(ejsLayouts);
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
  console.log('url...: ' + req.originalUrl);
  console.log('time...: ' + Date.now());
  next();
});

app.use('/', routeShop);

app.listen(3000);
