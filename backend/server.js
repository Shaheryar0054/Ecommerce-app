import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

app.post("/", async (req,resp) => {
     const product = req.body;
     if (!product.name || !product.price || !product.image){
      return res.status(400).json({ success:false, message:"Please provide all fields"}); 
     }

     const newProduct = new Product(product)
     try {
      await newProduct.save();
      res.status(201).json({success:true, date:newProduct})
     }catch (error)
})

app.listen (5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000")
})

// 6stmujKoT54uHMLH
// shaheryarabid74