import authRouter from './authRouter.js';
import jobRouter from './jobRouter.js';
import express from 'express';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/jobs', jobRouter);

export default router;
