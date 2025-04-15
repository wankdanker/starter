<script setup lang="ts">
// App component
</script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/tasks">Tasks</router-link>
    </nav>
  </header>

  <main>
    <router-view />
  </main>

  <footer>
    <p>Technical Interview Starter Project</p>
  </footer>
</template>

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  color: #333;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

header {
  margin: 20px 0;
  padding: 20px 0;
  border-bottom: 1px solid #eaeaea;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  color: #42b983;
  text-decoration: none;
  padding: 5px 10px;
}

nav a.router-link-active {
  font-weight: bold;
}

main {
  min-height: 70vh;
  padding: 20px 0;
}

footer {
  margin-top: 30px;
  padding: 20px 0;
  text-align: center;
  color: #666;
  border-top: 1px solid #eaeaea;
}
</style>
