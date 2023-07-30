const express = require('express');

import { getHeroBannerContent, updateHeroBannerContent } from '../controllers/heroBannerController';
import { verifyAdmin } from '../services/authService';

const router = express.Router();

// Public route - no admin authentication required
router.get('/hero-banner', getHeroBannerContent);

// Protected route - requires admin authentication
router.put('/hero-banner', verifyAdmin, updateHeroBannerContent);

export default router;
