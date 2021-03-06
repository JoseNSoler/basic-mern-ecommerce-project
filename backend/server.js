import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'

dotenv.config()
await connectDB();

const app = express();
app.use(express.json());


app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

