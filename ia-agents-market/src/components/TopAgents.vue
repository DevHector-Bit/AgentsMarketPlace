<template>
    <section class="top-agents-section">
      <div class="section-content">
        <header class="section-header">
          <div class="header-content">
            <h2 class="section-title">Top Agents</h2>
            <p class="section-description">
              Checkout Top Rated Creators Agents IA
            </p>
          </div>
          <button class="rankings-button">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0184a1b870f82e4c82dd06fd0374f845c4198e6b9e74a8f7032e4c7d016965c5?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086"
              alt="Rankings icon"
              class="button-icon"
            />
            <span>View Rankings</span>
          </button>
        </header>
  
        <div class="agents-grid">
          <article
            v-for="(agent, index) in topAgents"
            :key="index"
            class="agent-card"
          >
            <span class="ranking-number">{{ index + 1 }}</span>
            <img :src="agent.avatar" :alt="agent.name" class="agent-avatar" />
            <div class="agent-info">
              <h3 class="agent-name">{{ agent.name }}</h3>
              <p class="sales-info">
                <span class="sales-label">Total Sales:</span>
                <span class="sales-value">{{ agent.totalSales }}</span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import type { Agent } from "../types/types";
  
  const topAgents = ref<Agent[]>([
    {
      name: "Keepitreal",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/13f501b92e49f860a6a1c0de44ed0f267953787b1e59207945a7c344507750b8?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
      totalSales: "34.53 ETH",
    },
    {
      name: "DigiLab",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b51d03a21f74c9f02bad27c66a9c3807d78c84a8d228e5e7f9c74b6b2194997c?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
      totalSales: "34.53 ETH",
    },
    {
      name: "GravityOne",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a1c4c3c2c27f8291c18e6405c2962c508b9526903b5824d1dba9a563263fdd97?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
      totalSales: "34.53 ETH",
    },
    {
      name: "AgentX",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/agentx.png?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
      totalSales: "45.12 ETH",
    },
    {
      name: "CyberGuru",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cyberguru.png?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
      totalSales: "52.34 ETH",
    },
    {
      name: "DigitalNova",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/digitalnova.png?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
      totalSales: "28.75 ETH",
    },
    {
      name: "MatrixMind",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/matrixmind.png?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
      totalSales: "61.00 ETH",
    },
    {
      name: "EchoAgent",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/echoagent.png?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
      totalSales: "39.20 ETH",
    },
  ]);
  </script>
  
  <style scoped>
  .top-agents-section {
    background-color: #2b2b2b;
    padding: 80px 0;
    overflow-x: hidden;
    box-sizing: border-box;
  }
  
  .section-content {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  @media (min-width: 1280px) {
    .section-content {
      padding: 0 120px;
    }
  }
  
  @media (min-width: 1440px) {
    .section-content {
      padding: 0 160px;
    }
  }
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 40px 100px;
    margin-bottom: 40px;
  }
  
  .header-content {
    text-align: left;
  }
  
  @media (max-width: 767px) {
    .header-content {
      text-align: center;
      width: 100%;
    }
    .section-header {
      gap: 20px;
      justify-content: center;
    }
  }
  
  .section-title {
    color: #fff;
    font-family: "Work Sans", sans-serif;
    font-size: 38px;
    font-weight: 600;
    line-height: 1.2;
    text-transform: capitalize;
  }
  
  .section-description {
    color: #fff;
    font-family: "Work Sans", sans-serif;
    font-size: 22px;
    line-height: 1.6;
    margin-top: 10px;
  }
  
  .rankings-button {
    display: flex;
    align-items: center;
    gap: 12px;
    border: 2px solid #a259ff;
    border-radius: 20px;
    padding: 0 50px;
    height: 60px;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    background: transparent;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
  }
  
  .rankings-button:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  .button-icon {
    width: 20px;
    height: 20px;
  }
  
  .agents-grid {
    display: grid;
    margin-top: 40px;
    gap: 20px;
    justify-items: center; /* Centra las tarjetas dentro de la grilla */
  }
  
  @media (min-width: 320px) {
    .agents-grid {
      grid-template-columns: 1fr;
    }
  }
  
  @media (min-width: 768px) {
    .agents-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      margin-top: 50px;
    }
  }
  
  @media (min-width: 1024px) {
    .agents-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media (min-width: 1280px) {
    .agents-grid {
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
      margin-top: 60px;
    }
  }
  
  .agent-card {
    position: relative;
    background: #3b3b3b;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .agent-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }
  
  @media (min-width: 320px) {
    .agent-card {
      padding: 15px;
    }
    .agent-avatar {
      width: 100px;
      height: 100px;
    }
  }
  
  @media (min-width: 768px) {
    .agent-card {
      padding: 20px;
    }
    .agent-avatar {
      width: 110px;
      height: 110px;
    }
  }
  
  @media (min-width: 1280px) {
    .agent-card {
      padding: 25px;
    }
    .agent-avatar {
      width: 120px;
      height: 120px;
    }
  }
  
  .ranking-number {
    position: absolute;
    top: 18px;
    left: 20px;
    width: 30px;
    height: 30px;
    background: #2b2b2b;
    border-radius: 20px;
    color: #858584;
    font-family: "Space Mono", monospace;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
  }
  
  .agent-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto;
  }
  
  .agent-info {
    margin-top: 20px;
  }
  
  .agent-name {
    color: #fff;
    font-family: "Work Sans", sans-serif;
    font-size: 22px;
    font-weight: 600;
    text-transform: capitalize;
  }
  
  .sales-info {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 5px;
    font-size: 16px;
  }
  
  .sales-label {
    color: #858584;
  }
  
  .sales-value {
    color: #fff;
    font-family: "Space Mono", monospace;
  }
  
  @media (max-width: 991px) {
    .top-agents-section {
      padding: 80px 20px;
    }
    .agents-grid {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      margin-top: 40px;
    }
    .rankings-button {
      padding: 0 20px;
    }
  }
  </style>
  