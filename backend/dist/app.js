"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const heroBannerRoutes_1 = __importDefault(require("./routes/heroBannerRoutes"));
const contentRoutes_1 = __importDefault(require("./routes/contentRoutes"));
const errorHandler_1 = __importDefault(require("./utils/errorHandler"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Connect to MongoDB
const MONGODB_URI = 'mongodb://localhost:27017/myappdb';
const mongooseOptions = {
    useUnifiedTopology: true,
    useFindAndModify: false,
};
mongoose_1.default
    .connect(MONGODB_URI, mongooseOptions)
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
// Routes
app.use('/api', heroBannerRoutes_1.default);
app.use('/api', contentRoutes_1.default);
app.use(errorHandler_1.default);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
