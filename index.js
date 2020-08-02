const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 5000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const { urlencoded } = require('express');

app.use(urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'));
app.use(expressLayouts);
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



app.listen(port,function(err)
{
   if(err)
   {
       console.log(`Error in running the server: ${err}` );
   }

   console.log(`The server is running on port: ${port} `);
});