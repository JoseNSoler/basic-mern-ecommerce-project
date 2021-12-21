import express from 'express'
import { getAllProducts, getProductById } from '../controller/productControllers.js';

const router = express.Router();

//@desc GET all products
//@route GET /api/products
//@access Public
router.get('/', getAllProducts)


//@desc GET product by id
//@route GET /api/products/:id
//@access Public
router.get('/:id', getProductById)

export default router