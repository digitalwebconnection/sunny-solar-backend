import { Router } from 'express';
import {
  loginAdmin,
  getAdminProfile,
  getDashboardStats
} from '../controllers/admin.controller.js';
import { protect } from '../middleware/auth.js';

const router = Router();

// Public auth routes
router.post('/login', loginAdmin);

// Protected admin routes
router.get('/me', protect, getAdminProfile);
router.get('/stats', protect, getDashboardStats);

export default router;
