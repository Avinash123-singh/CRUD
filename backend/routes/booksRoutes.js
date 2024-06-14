

const router = require("express").Router()
const bookmodel=require("../models/bookmodel")



// POST REQUEST

router.post ("/add",async (req,resp)=>{
    try{
const data = req.body
const newBook= new bookmodel(data)
  await newBook.save().then(()=>{
    resp.status(200).json({message:"Book Added Successfully"})
  })
    }catch (error){
        console.log(error);
        resp.status(500).json({ error: "Internal Server Error" });
    }
})


//GET REQUEST

router.get("/getBooks",async(req,resp)=>{
  let books;
  try{
books=await bookmodel.find()
resp.status(200).json({books})
  }catch(error){
    console.log(error);
  }
})



//GET REQUEST WITH THE HELP OF ID 

router.get("/getBooks/:id",async(req,resp)=>{

  let books;
const id = req.params.id;

  try {
    books = await bookmodel.findById(id)
    resp.status(200).json({books})
    
  }catch(error){
    console.log(error);
  }
})


//UPDATE BOOK BY ID 

router.put("/updateBooks/:id",async(req,resp)=>{

const id = req.params.id;
   
const {bookname,description,author,image,price} =req.body;

let book;


  try {
    
  book = await bookmodel.findByIdAndUpdate(id,{
    bookname,
    description,
    author,
    image,
    price})
    await book.save().then(()=>resp.status(200).json({message:"Data Updated Sucessfully"}))

  } catch (error) {

    console.log(error);

  }
})

//DELETE BOOK BY ID

router.delete("/deleteBook/:id", async(req,resp)=>{

  const id = req.params.id;

  

  try {
    await bookmodel.findByIdAndDelete(id).then(()=>resp.status(201).json({message:"data  deleted sucessfully"}))
    

  } catch (error) {
    
  }
})

module.exports =router;





