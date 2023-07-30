"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAdmin = void 0;
const jwt = require('jsonwebtoken');
// Secret key for JWT (should be stored securely in env variable)
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'default-secret-key';
// Middleware to verify admin authentication using JWT
const verifyAdmin = (req, res, next) => {
    var _a;
    const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Missing token' });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        if (!decoded.isAdmin) {
            return res.status(403).json({ error: 'Forbidden - Not an admin' });
        }
        // You can attach the decoded payload to the request for later use, e.g., req.adminUserId = decoded.userId;
        next();
    }
    catch (error) {
        console.error('Error verifying token:', error);
        res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
};
exports.verifyAdmin = verifyAdmin;
