// backend/src/utils/errorHandler.ts

import { Request, Response, NextFunction } from 'express';

const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error('Error occurred:', err);

    // Check for known error types and respond with appropriate status and message
    if (err.name === 'ValidationError') {
        return res.status(400).json({ error: 'Validation error' });
    }

    // Handle other types of errors
    return res.status(500).json({ error: 'Internal server error' });
};

export default errorHandler;
