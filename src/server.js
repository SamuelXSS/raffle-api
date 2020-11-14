const express = require('express');
const routes = require('./routes.js');
const app = express();
const cors = require('cors')

require('dotenv').config()
require('./database')

app.listen(process.env.PORT || 3000)
app.use(express.json())
app.use(routes)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin": "*")
}) 
app.use(cors())