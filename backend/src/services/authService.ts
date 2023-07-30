import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');


// Secret key for JWT (should be stored securely in env variable)
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'default-secret-key';


interface AdminPayload {
    userId: string;
    isAdmin: boolean;
}

// Middleware to verify admin authentication using JWT
export const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Missing token' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY) as AdminPayload;
        if (!decoded.isAdmin) {
            return res.status(403).json({ error: 'Forbidden - Not an admin' });
        }

        // You can attach the decoded payload to the request for later use, e.g., req.adminUserId = decoded.userId;
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
};
