"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const heroBannerController_1 = require("../controllers/heroBannerController");
const authService_1 = require("../services/authService");
const router = express.Router();
// Public route - no admin authentication required
router.get('/hero-banner', heroBannerController_1.getHeroBannerContent);
// Protected route - requires admin authentication
router.put('/hero-banner', authService_1.verifyAdmin, heroBannerController_1.updateHeroBannerContent);
exports.default = router;
