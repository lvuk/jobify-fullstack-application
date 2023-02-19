import {
  createJob,
  deleteJob,
  getAllJobs,
  showStats,
  updateJob,
} from '../controllers/jobsController.js';
import express from 'express';

const jobRouter = express.Router();

jobRouter.route('/').post(createJob).get(getAllJobs);
jobRouter.route('/stats').get(showStats);
jobRouter.route('/:id').delete(deleteJob).patch(updateJob);

export default jobRouter;
