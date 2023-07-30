const express = require('express');

import { getContentSectionData, updateContentSectionData } from '../controllers/contentController';
import { verifyAdmin } from '../services/authService';

const router = express.Router();

// Public route - no admin authentication required
router.get('/content-section', getContentSectionData);

// Protected route - requires admin authentication
router.put('/content-section', verifyAdmin, updateContentSectionData);

export default router;
