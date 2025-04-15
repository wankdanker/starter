<script setup lang="ts">
import { ref } from 'vue'
import { Task } from '@shared/types'

const title = ref('')
const description = ref('')

const emit = defineEmits<{
  (e: 'create-task', newTask: Omit<Task, 'id'>): void
}>()

const submitForm = () => {
  if (!title.value.trim()) return
  
  // Create a new task object
  const newTask: Omit<Task, 'id'> = {
    title: title.value,
    description: description.value,
    completed: false,
    userId: 1 // Default user ID
  }
  
  // Emit the event with the new task
  emit('create-task', newTask)
  
  // Reset form
  title.value = ''
  description.value = ''
}
</script>

<template>
  <div class="task-form">
    <h2>Create New Task</h2>
    
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="title">Title</label>
        <input 
          type="text" 
          id="title" 
          v-model="title" 
          placeholder="Enter task title"
          required
        >
      </div>
      
      <div class="form-group">
        <label for="description">Description</label>
        <textarea 
          id="description" 
          v-model="description" 
          placeholder="Enter task description"
          rows="3"
        ></textarea>
      </div>
      
      <button type="submit" class="btn-submit">Create Task</button>
    </form>
  </div>
</template>

<style scoped>
.task-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-top: 0;
  color: #42b983;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

textarea {
  resize: vertical;
}

.btn-submit {
  background: #42b983;
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn-submit:hover {
  opacity: 0.9;
}
</style>
