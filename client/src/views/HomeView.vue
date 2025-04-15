<script setup lang="ts">
// Home view component
</script>

<template>
  <div class="home">
    <h1>Technical Interview Starter</h1>
    <p>Welcome to the technical interview project! This is a Vue 3 application with TypeScript.</p>
    
    <div class="instructions">
      <h2>Instructions</h2>
      <p>Please implement the following features:</p>
      <ol>
        <li>Connect to the Express API to fetch tasks</li>
        <li>Display the tasks in a formatted list</li>
        <li>Implement the ability to create a new task</li>
        <li>Implement the ability to mark a task as completed</li>
      </ol>
      
      <br>
      <p>Navigate to the <router-link to="/tasks">Tasks</router-link> page to begin.</p>
      <br>
      <p>Additional features if time allows:</p>
      
      <ol>
        <li>Implementing a task editing feature</li>
        <li>Implementing a task deletion feature</li>
        <li>Implementing a search/filter feature for tasks</li>
        <li>Implementing pagination for the task list</li>
        <li>Implementing a task detail view</li>
        <li>Adding unit tests for your components</li>
        <li>Implementing a dark mode toggle</li>
        <li>Using a CSS framework like Tailwind CSS or Bootstrap</li>
        <li>Implementing a loading spinner while fetching tasks</li>
        <li>Implementing error handling for API requests</li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #42b983;
}

.instructions {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.instructions h2 {
  color: #42b983;
}

.instructions ol {
  padding-left: 20px;
}

.instructions li {
  margin-bottom: 10px;
}
</style>
