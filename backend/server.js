const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');


dotenv.config();
connectDB();
const app = express();

app.use('/api/auth', authRoutes);
app.use(cors({ origin: '*' })); 
app.use(express.json());


app.get('/', (req, res) => {
  res.send('SETHJI KI DUKAAN');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
