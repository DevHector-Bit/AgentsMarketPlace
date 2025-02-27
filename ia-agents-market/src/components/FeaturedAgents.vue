<template>
    <section class="featured-section">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d83ccecb889973f54094975eae2125b081be66b9342adcf5669a9ac74463ff0?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086"
        alt="Featured background"
        class="featured-background"
      />
  
      <div class="featured-content">
        <div class="agent-details">
          <div class="artist-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fe447e0eca37621ccc7dc90108c6fc9cd9480ae1e0c1071dd8ebd4f47180388?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086"
              alt="Artist avatar"
              class="artist-avatar"
            />
            <span class="artist-name">Shroomie</span>
          </div>
  
          <h2 class="featured-title">Magic iA</h2>
  
          <button class="action-button">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bca931cd5b3a3e592432b8ff25abd3169512f6f0f0e8c9bcfa20c5ea820cb47?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086"
              alt="Test icon"
              class="button-icon"
            />
            <span>Test New Agent</span>
          </button>
        </div>
  
        <div class="auction-timer">
          <p class="timer-label">Auction ends in:</p>
          <div class="timer-display">
            <div class="time-unit">
              <span class="time-value">{{ hours }}</span>
              <span class="time-label">Hours</span>
            </div>
            <span class="time-separator">:</span>
            <div class="time-unit">
              <span class="time-value">{{ minutes }}</span>
              <span class="time-label">Minutes</span>
            </div>
            <span class="time-separator">:</span>
            <div class="time-unit">
              <span class="time-value">{{ seconds }}</span>
              <span class="time-label">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue";
  
  // Definir la fecha final de la subasta (en este ejemplo, 1 hora a partir del momento actual)
  const auctionEnd = new Date();
  auctionEnd.setHours(auctionEnd.getHours() + 1);
  
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);
  
  let intervalId: number | null = null;
  
  function updateCountdown() {
    const now = new Date();
    const diff = auctionEnd.getTime() - now.getTime();
    if (diff <= 0) {
      hours.value = 0;
      minutes.value = 0;
      seconds.value = 0;
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
      return;
    }
    const totalSeconds = Math.floor(diff / 1000);
    hours.value = Math.floor(totalSeconds / 3600);
    minutes.value = Math.floor((totalSeconds % 3600) / 60);
    seconds.value = totalSeconds % 60;
  }
  
  onMounted(() => {
    updateCountdown();
    intervalId = setInterval(updateCountdown, 1000);
  });
  
  onUnmounted(() => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  });
  </script>
  
  <style scoped>
  .featured-section {
    position: relative;
    min-height: 640px;
    padding: 361px 0 59px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
  
  .featured-background {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .featured-content {
    position: relative;
    width: 100%;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  
  @media (min-width: 768px) {
    .featured-content {
      flex-direction: row;
      align-items: flex-end;
      gap: 40px;
      padding: 60px 40px;
    }
  }
  
  @media (min-width: 1280px) {
    .featured-content {
      gap: 60px;
      padding: 80px 120px;
    }
  }
  
  .agent-details {
    flex: 1;
    min-width: 240px;
  }
  
  .artist-card {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #3b3b3b;
    border-radius: 20px;
    padding: 10px 20px;
    width: fit-content;
  }
  
  .artist-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  
  .artist-name {
    color: #fff;
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
  }
  
  .featured-title {
    color: #fff;
    font-family: "Work Sans", sans-serif;
    font-size: 51px;
    font-weight: 600;
    line-height: 1.1;
    margin-top: 30px;
  }
  
  /* Botón con efecto drop shadow */
  .action-button {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #fff;
    border: none;
    border-radius: 20px;
    padding: 0 50px;
    height: 60px;
    margin-top: 30px;
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .action-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  .button-icon {
    width: 20px;
    height: 20px;
  }
  
  .auction-timer {
    background: rgba(59, 59, 59, 0.5);
    border-radius: 20px;
    padding: 30px;
    width: 295px;
  }
  
  .timer-label {
    color: #fff;
    font-family: "Space Mono", monospace;
    font-size: 12px;
  }
  
  .timer-display {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }
  
  .time-unit {
    flex: 1;
    text-align: left;
  }
  
  .time-value {
    color: #fff;
    font-family: "Space Mono", monospace;
    font-size: 38px;
    font-weight: 700;
    line-height: 1.2;
  }
  
  .time-label {
    color: #fff;
    font-family: "Space Mono", monospace;
    font-size: 12px;
    display: block;
    margin-top: 5px;
  }
  
  .time-separator {
    color: #fff;
    font-family: "Space Mono", monospace;
    font-size: 28px;
    font-weight: 700;
  }
  
  @media (max-width: 991px) {
    .featured-section {
      padding: 100px 20px;
    }
  
    .featured-title {
      font-size: 40px;
    }
  
    .action-button {
      padding: 0 20px;
    }
  }
  </style>
  
  