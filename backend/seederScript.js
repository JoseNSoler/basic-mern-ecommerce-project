import dotenv from 'dotenv';
import { products } from './data/products.js';
import { connectDB } from './config/db.js';
import Product from './models/Product.js'

dotenv.config()
await connectDB();


const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log("Data import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import");
    process.exit(1);
  }
}

importData();