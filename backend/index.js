const express = require('express');
const connectDB = require('./config.js')
const cors = require('cors');
const user = require('./routes/userroute')
const sale = require('./routes/salesentryrouets.js')
// const User = require('./models/user.models')
connectDB();

const  app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(user);
app.use(sale);





app.listen(5000,()=>{
    console.warn('server started');
})
