const express = require('express');
const cors = require('cors');
const app = express();
const {Client} = require('pg');
const client = new Client();

require("dotenv").config;

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/signup", require('./routes/signup'));
app.use("/api/login", require('./routes/login'));
app.use("/api/signout", require('./routes/signout'));
app.use("/api/refresh-token", require('./routes/refreshToken'));

app.get('/', (req, res) =>{
    res.send('Holawas')
});

app.listen(port, () => {
    console.log(`Server ir running on port: ${port}`);
});