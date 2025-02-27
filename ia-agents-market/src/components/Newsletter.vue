<template>
    <section class="newsletter-section">
      <div class="newsletter-container">
        <div class="newsletter-image">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/321369407c73e494806198262a596e988761e244e637cc7b587c09f91b705b8b?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086"
            alt="Newsletter illustration"
            class="image"
          />
        </div>
  
        <div class="newsletter-content">
          <div class="content-header">
            <h2 class="title">Join our weekly digest</h2>
            <p class="description">
              Get exclusive promotions & updates straight to your inbox.
            </p>
          </div>
  
          <form class="subscribe-form" @submit.prevent="handleSubmit">
            <input
              type="email"
              placeholder="Enter your email here"
              class="email-input"
              v-model="email"
            />
            <button type="submit" class="subscribe-button">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/98718d65af75e950ef160589e384328a9de04e70a07692c98ea74e51678082a1?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086"
                alt="Subscribe icon"
                class="button-icon"
              />
              <span>Subscribe</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const email = ref("");
  
  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para manejar la suscripción
    console.log("Subscribing email:", email.value);
  };
  </script>
  
  <style scoped>
  /* Sección general */
  .newsletter-section {
    background-color: #2b2b2b;
    padding: 83px 0;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }
  
  /* Contenedor centrado y con ancho máximo */
  .newsletter-container {
    background: #3b3b3b;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 30px 20px;
  }
  
  /* Para tablets y superiores */
  @media (min-width: 768px) {
    .newsletter-container {
      flex-direction: row;
      gap: 50px;
      padding: 40px;
    }
  }
  
  /* Para pantallas grandes */
  @media (min-width: 1280px) {
    .newsletter-container {
      padding: 80px;
      gap: 100px;
    }
  }
  
  /* Imagen */
  .newsletter-image {
    flex: 1;
    min-width: 240px;
  }
  
  .image {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  
  /* Contenido de la newsletter */
  .newsletter-content {
    flex: 1;
    min-width: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .content-header {
    color: #fff;
  }
  
  .title {
    font-family: "Work Sans", sans-serif;
    font-size: 38px;
    font-weight: 600;
    line-height: 1.2;
  }
  
  .description {
    font-family: "Work Sans", sans-serif;
    font-size: 22px;
    line-height: 35px;
    margin-top: 10px;
  }
  
  /* Formulario */
  .subscribe-form {
    display: flex;
    margin-top: 40px;
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
  }
  
  .email-input {
    flex: 1;
    padding: 0 20px;
    height: 60px;
    border: none;
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
  }
  
  .email-input:focus {
    outline: none;
  }
  
  /* Botón con efecto drop shadow */
  .subscribe-button {
    display: flex;
    align-items: center;
    gap: 12px;
    background: linear-gradient(128deg, #a259ff 49.75%, #377df7 103.23%);
    border: none;
    padding: 0 50px;
    height: 60px;
    color: #fff;
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .subscribe-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  .button-icon {
    width: 20px;
    height: 20px;
  }
  
  /* Ajustes para pantallas pequeñas */
  @media (max-width: 991px) {
    .newsletter-section {
      padding: 83px 20px;
    }
    .newsletter-container {
      padding: 20px;
      gap: 40px;
    }
    .subscribe-button {
      padding: 0 20px;
    }
  }
  </style>
  