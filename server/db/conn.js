const mongoose=require("mongoose");
//const DB=process.env.DATABASE;
;
const DB=process.env.DATABASE;


mongoose.connect(DB,{

    //bufferCommands: false,
    useUnifiedTopology:true,
    useNewUrlParser:true

}).then(()=>{
    console.log("data base is connected");
}).catch((error)=>{
    console.log("error:"+error);
})