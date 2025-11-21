<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="logo-link">
        <img src="./logo/logo.svg" alt="Personal Logo" class="logo" />
        <span class="logo-text">{{ siteName }}</span>
      </router-link>
      
      <div class="nav-right">
        <ul class="nav-menu" :class="{ 'open': isMenuOpen }">
          <li v-for="item in navItems" :key="item.path" class="nav-item">
            <router-link 
              :to="item.path" 
              class="nav-link"
              :class="{ 'active': $route.path === item.path }"
            >
              {{ item.text }}
            </router-link>
          </li>
        </ul>
        
        <button @click="toggleTheme" class="theme-toggle">
          <span v-if="currentTheme === 'light'">🌙暗</span>
          <span v-else>☀️亮</span>
        </button>
        
        <button @click="toggleMenu" class="mobile-menu-toggle">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script src="./NavBar.js"></script>
<style scoped src="./NavBar.css"></style>