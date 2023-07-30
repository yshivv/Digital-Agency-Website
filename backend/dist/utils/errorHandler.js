"use strict";
// backend/src/utils/errorHandler.ts
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    console.error('Error occurred:', err);
    // Check for known error types and respond with appropriate status and message
    if (err.name === 'ValidationError') {
        return res.status(400).json({ error: 'Validation error' });
    }
    // Handle other types of errors
    return res.status(500).json({ error: 'Internal server error' });
};
exports.default = errorHandler;
