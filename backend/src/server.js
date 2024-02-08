import app from './app.js';
import connectDB from './config/db.js';

// Connect to the database
connectDB();

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));