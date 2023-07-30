// backend/src/server.ts
import express from 'express';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';
import heroBannerRoutes from './routes/heroBannerRoutes';
import contentRoutes from './routes/contentRoutes';

// Create an instance of Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/myappdb';
const mongooseOptions: ConnectOptions & {
    useUnifiedTopology: boolean;
    // Remove the line below
    // useFindAndModify: false,
} = {
    useUnifiedTopology: true,
};
mongoose
    .connect(MONGODB_URI, mongooseOptions)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Routes
app.use('/api', heroBannerRoutes);
app.use('/api', contentRoutes);

// Error handling middleware (use it as the last middleware)
app.use((err, req, res, next) => {
    console.error('Error occurred:', err);

    // Check for known error types and respond with appropriate status and message
    if (err.name === 'ValidationError') {
        return res.status(400).json({ error: 'Validation error' });
    }

    // Handle other types of errors
    return res.status(500).json({ error: 'Internal server error' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
