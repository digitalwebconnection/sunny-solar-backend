import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import apiRouter from './routes/index.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Sunny Solar API',
    endpoints: {
      health: '/api/health'
    }
  });
});

// API routes
app.use('/api', apiRouter);

// 404 & Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
