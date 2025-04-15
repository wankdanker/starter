<script setup lang="ts">
import { Task } from '@shared/types'

const props = defineProps<{
  tasks: Task[]
}>()

const emit = defineEmits<{
  (e: 'toggle-status', taskId: number): void
}>()
</script>

<template>
  <div class="task-list">
    <h2>{{ tasks.length }} Tasks</h2>
    
    <div v-if="tasks.length === 0" class="empty-state">
      No tasks found. Create a new one above.
    </div>
    
    <ul v-else>
      <li 
        v-for="task in tasks" 
        :key="task.id"
        :class="{ 'task-completed': task.completed }"
      >
        <div class="task-content">
          <h3>{{ task.title }}</h3>
          <p>{{ task.description }}</p>
        </div>
        
        <div class="task-actions">
          <button 
            @click="emit('toggle-status', task.id)"
            :class="task.completed ? 'btn-incomplete' : 'btn-complete'"
          >
            {{ task.completed ? 'Mark Incomplete' : 'Mark Complete' }}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.task-list {
  margin: 20px 0;
}

.empty-state {
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 8px;
  color: #666;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: white;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.task-completed {
  opacity: 0.7;
}

.task-completed h3 {
  text-decoration: line-through;
  color: #888;
}

.task-content {
  flex: 1;
}

.task-content h3 {
  margin: 0 0 5px 0;
  color: #333;
}

.task-content p {
  margin: 0;
  color: #666;
}

.task-actions {
  margin-left: 20px;
}

button {
  background: #42b983;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn-incomplete {
  background: #e74c3c;
}

button:hover {
  opacity: 0.9;
}
</style>
