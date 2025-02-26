import express from "express";
import cors from 'cors';
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";

//App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
app.get('/',(req,res)=>{
    res.send("heello")
})
// middleware
app.use(express.json());
// app.use(cors({origin:"https://wearcart.vercel.app"}));

//api endpoints
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter);


app.listen(port,()=>console.log(`server listen on port : ${port}`));