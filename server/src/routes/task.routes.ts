import { Router } from 'express';
import { 
  getAllTasks, 
  getTaskById, 
  createTask, 
  toggleTaskStatus, 
  deleteTask 
} from '../controllers/task.controller';

const router = Router();

// GET all tasks
router.get('/', getAllTasks);

// GET task by ID
router.get('/:id', getTaskById);

// POST create a new task
router.post('/', createTask);

// PATCH toggle task status
router.patch('/:id/toggle', toggleTaskStatus);

// DELETE a task
router.delete('/:id', deleteTask);

export const taskRoutes = router;