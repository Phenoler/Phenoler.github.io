<template>
  <div class="contact-view">
    <div class="contact-container">
      <h1 class="contact-title">联系我</h1>
      <div class="contact-grid">
        <div 
          v-for="item in contacts"
          :key="item.id"
          class="contact-card"
        >
          <div class="contact-icon" :style="{ color: `var(${item.colorVar})` }">
            {{ item.icon }}
          </div>
          <h3 class="contact-platform">{{ item.platform }}</h3>
          <p v-if="item.info" class="contact-info">{{ item.info }}</p>
          
          <button
            class="contact-action"
            :style="{
              backgroundColor: `var(${item.colorVar})`,
              color: 'white'
            }"
            @click="handleAction(item)"
            @mouseover="hoverAction(item)"
            @mouseleave="leaveAction(item)"
          >
            {{ item.actionText }}
          </button>
          
          <div 
            v-if="item.qrCode" 
            class="qr-code"
          >
            {{ item.platform }}二维码
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { contactItems, useContactTheme, handleContactAction } from './ContactView.js'

export default {
  name: 'ContactView',
  setup() {
    const { currentTheme } = useContactTheme()
    
    const hoverAction = (item) => {
      document.documentElement.style.setProperty(
        '--action-hover-color', 
        getComputedStyle(document.documentElement)
          .getPropertyValue(item.colorVar.replace('color', 'dark'))
      )
    }
    
    const leaveAction = () => {
      document.documentElement.style.removeProperty('--action-hover-color')
    }
    
    return {
      contacts: contactItems,
      currentTheme,
      handleAction: handleContactAction,
      hoverAction,
      leaveAction
    }
  }
}
</script>

<style scoped src="./ContactView.css"></style>