const express = require('express');
const cors = require('cors');
const app = express();
const {Client} = require('pg');
const client = new Client();
const mongoose = require('mongoose');

require("dotenv").config;

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

async function main(){
    await mongoose.connect("mongodb+srv://Axel:NANeLr7SLYHukvK7@emergencitycluster.idc1k3n.mongodb.net/?retryWrites=true&w=majority&appName=EmergencityCluster");
    console.log("Conectado a mongo")
}

main().catch(console.error);

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