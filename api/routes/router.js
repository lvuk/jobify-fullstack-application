import authRouter from './authRouter.js';
import jobRouter from './jobRouter.js';
import express from 'express';
import authenticateUser from '../middleware/auth.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/jobs', authenticateUser, jobRouter);

export default router;
