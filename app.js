const express = require('express');
const path = require('path');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const db = require('./app_server/models/db');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app_server/views'));


// const routeShop = require(path.join(__dirname, './app_server/routes/router'));
// alttaki satiri kullanmaz ve obur tarafta parametre vermezsek yukaridaki require('./shopController')(); boyle kullan yine calismazsa yukaridaki gibi path.join ekle
// const ctrlObj = ctrlShop('yaziekle');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(ejsLayouts);
app.use('/public', express.static(path.join(__dirname, 'public')));

/* app.use(function(req, res, next){
  console.log('url...: ' + req.originalUrl);
  console.log('time...: ' + Date.now());
  next(); */

require('./app_server/routes/routesManager')(app);

// const User = require('./app_server/models/user');

/* const newUser = User({
  name: 'Kenan',
  surname: 'Metin',
  userName: 'kenan',
  password: '123'
});

newUser.save(function(err){
  if(err){
    console.log(err);
  } else {
    console.log('kullanici kaydedildi.')
  }
})
 */
app.listen(3000);
