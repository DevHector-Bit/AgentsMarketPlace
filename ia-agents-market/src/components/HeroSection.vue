<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">Discover Agents IA &amp; More</h1>
        <p class="hero-description">
          Agent marketplace UI created with Anima for Figma. Collect, agents IA
        </p>

        <button class="primary-button">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6e2f4858ada5d6fc34997c5ca1e7158c3b850a1bdb40b2d56119f6dc9a7e4b2?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086"
            alt="Get Started icon"
            class="button-icon"
          />
          <span>Get Started</span>
        </button>

        <div class="stats-container">
          <div class="stat-item">
            <h3 class="stat-value">240k+</h3>
            <p class="stat-label">Total Sale</p>
          </div>
          <div class="stat-item">
            <h3 class="stat-value">100k+</h3>
            <p class="stat-label">Auctions</p>
          </div>
          <div class="stat-item">
            <h3 class="stat-value">240k+</h3>
            <p class="stat-label">Artists</p>
          </div>
        </div>
      </div>

      <div class="featured-nft">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/be1886eae37400ad5f052aaa2299712964e6571b31f234c2fb9d9cd9d04d6687?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086"
          alt="Featured NFT"
          class="nft-image"
        />
        <div class="nft-info">
          <h2 class="nft-title">DAVINCI ART IA</h2>
          <div class="artist-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4559840e26fe8837e271bbe046b73a952b719f628fb99c4008450b3a5b70a38d?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086"
              alt="Artist avatar"
              class="artist-avatar"
            />
            <span class="artist-name">Animakid</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Aquí podrías agregar la lógica del componente si fuera necesaria
</script>

<style scoped>
/* 
   1) Ajustamos la sección .hero-section para que ocupe al menos 
      la altura de la ventana y muestre un gradiente de fondo.
   2) Retiramos la imagen hero-background para que el degradado
      sea el fondo principal.
*/

.hero-section {
  position: relative;
  width: 100vw;      /* Ocupa el 100% del ancho de la ventana */
  height: 100vh;     /* Ocupa el 100% de la altura de la ventana */
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://cdn.builder.io/api/v1/image/assets/TEMP/e2ac27ddaca1c007a15386bf90cf09b3c6554fb026c09daac856257a12e9ebdc?placeholderIfAbsent=true&apiKey=c4dac56c18e241a796d9378a3a605086");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 40px 20px; /* Padding general para mobile */
  box-sizing: border-box; /* Asegura que el padding se incluya en el ancho total */
  overflow: hidden;  /* Opcional, para evitar scroll horizontal */
}


/* Ajustes en distintos breakpoints */
@media (min-width: 768px) {
  .hero-section {
    padding: 80px 40px;
  }
}

@media (min-width: 1280px) {
  .hero-section {
    padding: 136px 120px;
    max-width: 1920px;
  }
}

.hero-content {
  display: flex;
  flex-wrap: wrap; /* Para que en pantallas pequeñas se apilen */
  width: 100%;
  max-width: 1440px;
  gap: 60px;
  align-items: center;
  justify-content: space-between;
}

/* 
   En pantallas muy anchas (por ejemplo 1440px), 
   puedes darle padding adicional si deseas:
*/
@media (min-width: 1440px) {
  .hero-content {
    padding: 0 40px;
  }
}

.hero-text {
  flex: 1;
  min-width: 280px;
  width: 100px;
  color: #fff;
}

.hero-title {
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0; /* Aseguramos que no tenga márgenes extra */
}

/* Tamaños de fuente responsivos */
@media (min-width: 320px) {
  .hero-title {
    font-size: 28px;
    line-height: 39px;
  }
}
@media (min-width: 768px) {
  .hero-title {
    font-size: 38px;
    line-height: 45px;
  }
}
@media (min-width: 1280px) {
  .hero-title {
    font-size: 67px;
    line-height: 74px;
  }
}

.hero-description {
  font-family: "Work Sans", sans-serif;
  margin-top: 20px;
}

@media (min-width: 320px) {
  .hero-description {
    font-size: 16px;
    line-height: 24px;
  }
}
@media (min-width: 768px) {
  .hero-description {
    font-size: 18px;
    line-height: 28px;
  }
}
@media (min-width: 1280px) {
  .hero-description {
    font-size: 22px;
    line-height: 35px;
  }
}

.primary-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(101deg, #a259ff 13.57%, #ff6250 97.65%);
  border-radius: 20px;
  padding: 0 50px;
  height: 60px;
  margin-top: 40px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease;
}

.primary-button:hover{
  /* Intensifica la sombra al hacer hover*/
  box-shadow: 0 6px 12px rgba(0,0,0,0.4);
}

.button-icon {
  width: 20px;
  height: 20px;
}

.stats-container {
  display: flex;
  gap: 30px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.stat-item {
  flex: 1;
  min-width: 150px;
}

.stat-value {
  font-family: "Space Mono", monospace;
  font-size: 28px;
  font-weight: 700;
  color: #fff;
}

.stat-label {
  font-family: "Work Sans", sans-serif;
  font-size: 24px;
  color: #fff;
  margin-top: 5px;
}

.featured-nft {
  flex: 1;
  min-width: 280px;
  max-width: 510px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px; /* Para que coincida con el borde de la imagen */
  overflow: hidden;    /* Asegura que la imagen quede dentro del borde redondeado */
  background: #3b3b3b; /* Color base para la tarjeta NFT */
}

.nft-image {
  width: 100%;
  display: block;
}

.nft-info {
  padding: 22px 20px;
}

.nft-title {
  color: #fff;
  font-family: "Work Sans", sans-serif;
  font-size: 22px;
  font-weight: 600;
  margin: 0; /* Quitar márgenes extra */
}

.artist-card {
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
  color: #fff;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
}

/* Ajustes adicionales para pantallas medianas/grandes */
@media (max-width: 1280px) {
  .hero-section {
    padding: 100px 20px;
  }

  .hero-title {
    font-size: 40px;
    line-height: 49px;
  }

  .primary-button {
    padding: 0 20px;
  }
}
</style>


