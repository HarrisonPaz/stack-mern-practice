import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api', routes);

export default app;
