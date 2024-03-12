const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middle Ware
app.use(cors());
app.use(express.json());


app.get('/', (req,res) =>{
    res.send('Doctor is running');
})

app. listen(port, () =>{
    console.log(`Car doctorsserver is running on port: ${port}`);
})
