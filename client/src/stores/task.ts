import { defineStore } from 'pinia'
import { ref } from 'vue'
import { TaskService } from '../services/api'
import type { Task } from '@shared/types'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([])
  const loading = ref(false)
  const error = ref('')
  
  // Fetch all tasks
  async function fetchTasks() {
    loading.value = true
    error.value = ''
    
    try {
      const response = await TaskService.getTasks()
      
      if (response.success && response.data) {
        tasks.value = response.data
      } else {
        error.value = response.error || 'Unknown error occurred'
      }
    } catch (err) {
      error.value = 'Failed to fetch tasks'
      console.error(err)
    } finally {
      loading.value = false
    }
  }
  
  // Create a new task
  async function createTask(newTask: Omit<Task, 'id'>) {
    loading.value = true
    error.value = ''
    
    try {
      const response = await TaskService.createTask(newTask)
      
      if (response.success && response.data) {
        // Add the new task to the list
        tasks.value.push(response.data)
        return true
      } else {
        error.value = response.error || 'Unknown error occurred'
        return false
      }
    } catch (err) {
      error.value = 'Failed to create task'
      console.error(err)
      return false
    } finally {
      loading.value = false
    }
  }
  
  // Toggle task status
  async function toggleTaskStatus(taskId: number) {
    loading.value = true
    error.value = ''
    
    try {
      const response = await TaskService.toggleTaskStatus(taskId)
      
      if (response.success && response.data) {
        // Update the task in the list
        const index = tasks.value.findIndex(t => t.id === taskId)
        if (index !== -1) {
          tasks.value[index] = response.data
        }
        return true
      } else {
        error.value = response.error || 'Unknown error occurred'
        return false
      }
    } catch (err) {
      error.value = 'Failed to update task'
      console.error(err)
      return false
    } finally {
      loading.value = false
    }
  }
  
  return {
    tasks,
    loading,
    error,
    fetchTasks,
    createTask,
    toggleTaskStatus
  }
})
