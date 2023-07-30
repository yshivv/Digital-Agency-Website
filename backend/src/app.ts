// backend/src/app.ts

import express from 'express';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';
import heroBannerRoutes from './routes/heroBannerRoutes';
import contentRoutes from './routes/contentRoutes';
import errorHandler from './utils/errorHandler';

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

// Add a route for the root path
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
