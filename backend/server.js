
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productsRoutes = require('./routes/products');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); 


app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);

app.get('/', (req, res) => {
  res.send('SETHJI KI DUKAAN');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
