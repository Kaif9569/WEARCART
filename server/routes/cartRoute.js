import express from 'express';
import {addToCart,updateToCart,getCart} from '../controllers/cartController.js';
import authUser from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post('/get',authUser,getCart);
cartRouter.post('/add',authUser,addToCart);
cartRouter.post('/update',authUser,updateToCart);

export default cartRouter;