

const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://avinashcrud:avinash123@cluster0.vep26q0.mongodb.net/crudoperation?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("connected")).catch(err => {
    console.log(err, "err")
})