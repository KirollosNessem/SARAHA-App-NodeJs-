const express = require('express');
const conectDB = require('./DB/conection');
const { userRoter, messageRouter, authRouter } = require('./modules/index.router');
require('dotenv').config()
const app = express();

const path = require('path');
app.use("/uploads", express.static(path.join(__dirname, './uploads')  ));
const port = process.env.PORT ||8888
conectDB();
app.use(express.json());
app.use(userRoter,messageRouter,authRouter)




app.listen(port,() => {
    console.log(`Server running at${port}`);
})