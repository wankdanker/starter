import { Request, Response } from 'express';
import type { Task, ApiResponse } from '@shared/types';

// In-memory storage for tasks
let tasks: Task[] = [
  {
    id: 1,
    title: 'Implement task listing',
    description: 'Connect to the API and show tasks on the frontend',
    completed: false,
    userId: 1
  },
  {
    id: 2,
    title: 'Implement task creation',
    description: 'Add ability to create new tasks',
    completed: false,
    userId: 1
  },
  {
    id: 3,
    title: 'Implement task completion',
    description: 'Add ability to mark tasks as completed',
    completed: true,
    userId: 1
  }
];

// Get all tasks
export const getAllTasks = (req: Request, res: Response) => {
  // Simulate network delay
  setTimeout(() => {
    const response: ApiResponse<Task[]> = {
      success: true,
      data: tasks
    };
    res.json(response);
  }, 500);
};

// Get task by ID
export const getTaskById = (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  
  const task = tasks.find(t => t.id === taskId);
  
  if (!task) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Task not found'
    };
    return res.status(404).json(response);
  }
  
  const response: ApiResponse<Task> = {
    success: true,
    data: task
  };
  
  res.json(response);
};

// Create a new task
export const createTask = (req: Request, res: Response) => {
  const { title, description, userId } = req.body;
  
  // Validation
  if (!title || title.trim() === '') {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Title is required'
    };
    return res.status(400).json(response);
  }
  
  // Generate a new ID
  const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
  
  const newTask: Task = {
    id: newId,
    title,
    description: description || '',
    completed: false,
    userId: userId || 1
  };
  
  // Add to "database"
  tasks.push(newTask);
  
  const response: ApiResponse<Task> = {
    success: true,
    data: newTask
  };
  
  res.status(201).json(response);
};

// Toggle task status
export const toggleTaskStatus = (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  
  if (taskIndex === -1) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Task not found'
    };
    return res.status(404).json(response);
  }
  
  // Toggle the status
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  
  const response: ApiResponse<Task> = {
    success: true,
    data: tasks[taskIndex]
  };
  
  res.json(response);
};

// Delete a task
export const deleteTask = (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  
  if (taskIndex === -1) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Task not found'
    };
    return res.status(404).json(response);
  }
  
  // Remove from "database"
  const deletedTask = tasks[taskIndex];
  tasks = tasks.filter(t => t.id !== taskId);
  
  const response: ApiResponse<Task> = {
    success: true,
    data: deletedTask
  };
  
  res.json(response);
};
