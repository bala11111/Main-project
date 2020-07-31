const express = require('express');
const app = express();
const port = 5000;




app.listen(port,function(err)
{
   if(err)
   {
       console.log(`Error in running the server: ${err}` );
   }

   console.log(`The server is running on port: ${port} `);
});