import axios from 'axios'
import type { Task, ApiResponse } from '@shared/types'

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const TaskService = {
  // Get all tasks
  async getTasks(): Promise<ApiResponse<Task[]>> {
    try {
      const response = await api.get<ApiResponse<Task[]>>('/tasks')
      return response.data
    } catch (error) {
      console.error('Error fetching tasks:', error)
      return { success: false, error: 'Failed to fetch tasks' }
    }
  },
  
  // Create a new task
  async createTask(task: Omit<Task, 'id'>): Promise<ApiResponse<Task>> {
    try {
      const response = await api.post<ApiResponse<Task>>('/tasks', task)
      return response.data
    } catch (error) {
      console.error('Error creating task:', error)
      return { success: false, error: 'Failed to create task' }
    }
  },
  
  // Toggle task status
  async toggleTaskStatus(taskId: number): Promise<ApiResponse<Task>> {
    try {
      const response = await api.patch<ApiResponse<Task>>(`/tasks/${taskId}/toggle`)
      return response.data
    } catch (error) {
      console.error('Error toggling task status:', error)
      return { success: false, error: 'Failed to update task status' }
    }
  }
}
