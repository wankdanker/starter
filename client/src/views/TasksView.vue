<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import TaskList from '../components/TaskList.vue'
import TaskForm from '../components/TaskForm.vue'
import { Task, ApiResponse } from '@shared/types'

const tasks = ref<Task[]>([])
const loading = ref(false)
const error = ref('')

// TODO: Implement fetchTasks function to get tasks from the API
const fetchTasks = async () => {
  // This function should be implemented by the candidate
  // It should fetch tasks from the /api/tasks endpoint
}

onMounted(() => {
  // TODO: Call fetchTasks when component is mounted
})

// TODO: Implement createTask function
const createTask = async (newTask: Omit<Task, 'id'>) => {
  // This function should be implemented by the candidate  
  // It should create a new task via the API
}

// TODO: Implement toggleTaskStatus function
const toggleTaskStatus = async (taskId: number) => {
  // This function should be implemented by the candidate
  // It should toggle the completed status of a task
}
</script>

<template>
  <div class="tasks-view">
    <h1>Tasks</h1>
    
    <div v-if="error" class="error">{{ error }}</div>
    
    <div v-if="loading" class="loading">Loading tasks...</div>
    
    <TaskForm 
      @create-task="createTask"
    />
    
    <TaskList 
      :tasks="tasks"
      @toggle-status="toggleTaskStatus"
    />
  </div>
</template>

<style scoped>
.tasks-view {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  color: #42b983;
}

.error {
  color: red;
  padding: 10px;
  margin: 10px 0;
  background: #ffeeee;
  border-radius: 4px;
}

.loading {
  padding: 20px;
  text-align: center;
  color: #666;
}
</style>
