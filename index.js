const express =require("express");

const app = express();

app.use(express.urlencoded({extend:true}));
app.use(express.json());

app.use(cors());

app.listen(3000,(err)=>{
    if(err) console.log("an error ocurrerd")
    console.log("server running on port 3000")
})