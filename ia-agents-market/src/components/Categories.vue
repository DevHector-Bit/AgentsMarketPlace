<template>
    <section class="categories-section">
      <div class="categories-content">
        <h2 class="section-title">Browse Categories</h2>
  
        <div class="categories-grid">
          <div class="categories-row">
            <article
              v-for="(category, index) in categoriesRow1"
              :key="index"
              class="category-card"
            >
              <img
                :src="category.image"
                :alt="category.name"
                class="category-image"
              />
              <h3 class="category-name">{{ category.name }}</h3>
            </article>
          </div>
  
          <div class="categories-row">
            <article
              v-for="(category, index) in categoriesRow2"
              :key="index"
              class="category-card"
            >
              <img
                :src="category.image"
                :alt="category.name"
                class="category-image"
              />
              <h3 class="category-name">{{ category.name }}</h3>
            </article>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import type { Category } from "../types/types";
  
  const categoriesRow1 = ref<Category[]>([
    {
      name: "Art",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f784daa2edb4b50701bf92e17643be13a61f47b5e879f30fabc7cd0a9e512546?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
    },
    {
      name: "Collectibles",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1a7a2bb3c669441179c90066dfc89e6b32f8554a24b248b186e37b8a230397af?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
    },
    {
      name: "Music",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b12c19b73d6a3568c8d3a64f4345f759273cdf36f749ea6586b12216b19922b4?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
    },
    {
      name: "Photography",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1456cdbfdea6f563b7c47e7c2ee6f431d6bc60ac421d37293dbe47f36a2c86b9?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
    },
  ]);
  
  const categoriesRow2 = ref<Category[]>([
    {
      name: "Video",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5ec4383684b803b7008dad724eef13904837bba2227ba79721b5a513364990db?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
    },
    {
      name: "Utility",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d858e896c60c9b8cecd5eeeb3dee3227a9d9cd9b20bb72969607e2ab66bc7ae4?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
    },
    {
      name: "Sport",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a03cadc9fe69b940cee77f7f53642ad7795b1e14be74b33d8dd4521afcf37c99?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
    },
    {
      name: "Virtual Worlds",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/816cbc7d2e2c955f38456472182863c1333adb963d1377e71af06580477d4900?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086",
    },
  ]);
  </script>
  
  <style scoped>
  .categories-section {
    background-color: #2b2b2b;
    padding: 80px 0 28px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }
  
  .categories-content {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  @media (min-width: 1280px) {
    .categories-content {
      padding: 0 120px;
    }
  }
  
  @media (min-width: 1440px) {
    .categories-content {
      padding: 0 160px;
    }
  }
  
  .section-title {
    color: #fff;
    font-family: "Work Sans", sans-serif;
    font-size: 38px;
    font-weight: 600;
    line-height: 1.2;
    text-transform: capitalize;
    text-align: left;
    margin-bottom: 40px;
  }
  
  .categories-grid {
    margin-top: 60px;
  }
  
  .categories-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
    justify-items: center;
  }
  
  @media (min-width: 1440px) {
    .categories-row {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  .category-card {
    background: #3b3b3b;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
  }
  
  .category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }
  
  .category-image {
    width: 100%;
    aspect-ratio: 1.12;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  
  .category-name {
    color: #fff;
    font-family: "Work Sans", sans-serif;
    font-size: 22px;
    font-weight: 600;
    padding: 20px 30px 25px;
    line-height: 1.4;
    text-align: center;
  }
  
  @media (max-width: 991px) {
    .categories-section {
      padding: 80px 20px 28px;
    }
    .categories-grid {
      margin-top: 40px;
    }
    .category-name {
      padding: 20px;
    }
  }
  </style>
  