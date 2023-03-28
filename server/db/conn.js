const mongoose=require("mongoose");
const DB=process.env.DATABASE;
//const DB="mongodb+srv://srushtipatel:situpatel143@cluster0.ajhzhg1.mongodb.net/Amazonweb?retryWrites=true&w=majority";
mongoose.connect(DB,{

    useUnifiedTopology:true,
    useNewUrlParser:true

}).then(()=>{
    console.log("data base is connected");
}).catch((error)=>{
    console.log("error:"+error);
})