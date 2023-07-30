"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const contentController_1 = require("../controllers/contentController");
const authService_1 = require("../services/authService");
const router = express.Router();
// Public route - no admin authentication required
router.get('/content-section', contentController_1.getContentSectionData);
// Protected route - requires admin authentication
router.put('/content-section', authService_1.verifyAdmin, contentController_1.updateContentSectionData);
exports.default = router;
