<template> 
    <section class="trending-section">
      <div class="section-content">
        <header class="section-header">
          <h2 class="section-title">Trending Agents</h2>
          <p class="section-description">
            Checkout our weekly updated trending collection.
          </p>
        </header>
  
        <div class="collections-grid">
          <article
            v-for="(collection, index) in trendingCollections"
            :key="index"
            class="collection-card"
          >
            <img
              :src="collection.image"
              :alt="collection.name"
              class="collection-image"
            />
  
            <div class="collection-info">
              <h3 class="collection-name">{{ collection.name }}</h3>
              <div class="artist-info">
                <img
                  :src="collection.artist.avatar"
                  :alt="collection.artist.name"
                  class="artist-avatar"
                />
                <span class="artist-name">{{ collection.artist.name }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import type { TrendingCollection } from "../types/types";
  
  const trendingCollections = ref<TrendingCollection[]>([
    {
      name: "OpenAI",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f2a47831135b5bc267b51ec83a6df36720862e62e45f8d9df965939fb516fa58?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
      artist: {
        name: "MrFox",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/00c305dfbf5372e986c7ca8ee8a97a748998e1602ac4e2a41f3436624ecd612d?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
      },
    },
    {
      name: "GEMMA",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a5c3cb31bb46e09908df0e5bacda8d982e41a4c9b8578d15a042abbbd92e343c?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
      artist: {
        name: "Shroomie",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/2fe447e0eca37621ccc7dc90108c6fc9cd9480ae1e0c1071dd8ebd4f47180388?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
      },
    },
    {
      name: "DeepSeeker",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/973ecbc8d7af6743cc624cafc1b9659c741b79eb0ccd080421cb57fac8f0882e?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
      artist: {
        name: "BeKind2Robots",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/a3a3ac9282007febe1de4b4557ab658b34c75196a20dad31680c276bd6e0cfe4?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
      },
    },
  ]);
  </script>
  
  <style scoped>
  /* Evitar el scroll horizontal y reducir ligeramente el ancho general */
  .trending-section {
    background-color: #2b2b2b;
    color: #fff;
    padding: 40px 0;
    overflow-x: hidden;
    box-sizing: border-box;
  }
  
  /* Reducir el padding lateral para que no se desborde */
  .section-content {
    padding: 0 10px;
  }
  
  /* Centrar el header en pantallas pequeñas */
  @media (max-width: 767px) {
    .section-header {
      text-align: center;
    }
  }
  
  /* Tablet */
  @media (min-width: 768px) {
    .trending-section {
      padding: 60px 0;
    }
    .section-content {
      padding: 0 20px;
    }
  }
  
  /* Desktop */
  @media (min-width: 1280px) {
    .trending-section {
      padding: 80px 0 128px;
    }
    .section-content {
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 80px;
    }
  }
  
  /* Pantallas extra anchas */
  @media (min-width: 1440px) {
    .section-content {
      padding: 0 100px;
    }
  }
  
  .section-header {
    text-align: left;
  }
  
  .section-title {
    font-family: "Work Sans", sans-serif;
    font-size: 38px;
    font-weight: 600;
    line-height: 1.2;
    text-transform: capitalize;
  }
  
  .section-description {
    font-family: "Work Sans", sans-serif;
    font-size: 22px;
    line-height: 1.6;
    margin-top: 10px;
  }
  
  .collections-grid {
    display: grid;
    gap: 20px;
    margin-top: 40px;
  }
  
  /* Móvil: 1 columna */
  @media (min-width: 320px) {
    .collections-grid {
      grid-template-columns: 1fr;
    }
  }
  
  /* Tablet: 2 columnas */
  @media (min-width: 768px) {
    .collections-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      margin-top: 50px;
    }
  }
  
  /* Desktop: 3 columnas */
  @media (min-width: 1280px) {
    .collections-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
      margin-top: 60px;
    }
  }
  
  .collection-card {
    flex: 1;
    min-width: 240px;
    background: #2b2b2b;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .collection-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }
  
  .collection-image {
    width: 100%;
    border-radius: 20px;
    aspect-ratio: 1;
    object-fit: cover;
  }
  
  .collection-info {
    padding: 15px 15px;
  }
  
  .collection-name {
    font-family: "Work Sans", sans-serif;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.4;
  }
  
  .artist-info {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 10px;
  }
  
  .artist-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  
  .artist-name {
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
    line-height: 1.4;
  }
  
  /* Ajustes para pantallas medianas */
  @media (max-width: 991px) {
    .trending-section {
      padding: 80px 0 100px;
    }
    .collections-grid {
      margin-top: 40px;
    }
  }
  </style>
  