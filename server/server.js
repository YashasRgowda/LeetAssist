const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const authRoutes = require('./routes/api/auth')
const aiRoutes = require('./routes/api/ai')
// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);
// app.use('/api/problems', require('./routes/api/problems'));
app.use('/api/ai', aiRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('API Running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));