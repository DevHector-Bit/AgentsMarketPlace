<template>
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-info">
          <nav class="footer-nav">
            <h3 class="nav-title">Explore</h3>
            <ul class="nav-links">
              <li><a href="#marketplace">Marketplace</a></li>
              <li><a href="#rankings">Rankings</a></li>
              <li><a href="#connect">Connect a wallet</a></li>
            </ul>
          </nav>
  
          <div class="footer-subscribe">
            <h3 class="subscribe-title">Join our weekly digest</h3>
            <div class="subscribe-content">
              <p class="subscribe-description">
                Get exclusive promotions & updates straight to your inbox.
              </p>
              <form class="subscribe-form" @submit.prevent="handleSubscribe">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  class="email-input"
                  v-model="email"
                />
                <button type="submit" class="subscribe-button">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
  
        <div class="footer-bottom">
          <div class="divider"></div>
          <p class="copyright">Ⓒ I'AM Market.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const email = ref("");
  
  const handleSubscribe = () => {
    // Handle newsletter subscription
    console.log("Subscribe email:", email.value);
  };
  </script>
  
  <style scoped>
  .site-footer {
    background-color: #3b3b3b;
    min-height: 333px;
    padding: 34px 0;
  }
  
  .footer-content {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 120px;
  }
  
  @media (min-width: 1440px) {
    .footer-content {
      padding: 0 160px;
    }
  }
  
  /* Por defecto se establece flex-wrap */
  .footer-info {
    display: flex;
    flex-wrap: wrap;
  }
  
  /* Mobile styles */
  @media (min-width: 320px) {
    .footer-info {
      flex-direction: column;
      gap: 30px;
    }
  
    .footer-nav,
    .footer-subscribe {
      width: 100%;
    }
  
    .subscribe-form {
      flex-direction: column;
      gap: 16px;
    }
  
    .subscribe-button {
      width: 100%;
    }
  }
  
  /* Tablet styles */
  @media (min-width: 768px) {
    .footer-info {
      flex-direction: row;
      gap: 50px;
      justify-content: space-between; /* Separa los bloques */
    }
  
    .footer-nav {
      width: 30%;
    }
  
    .footer-subscribe {
      width: 60%;
    }
  
    .subscribe-form {
      flex-direction: row;
    }
  }
  
  /* Desktop styles */
  @media (min-width: 1280px) {
    .footer-info {
      gap: 120px;
    }
  
    .footer-nav {
      width: auto;
    }
  
    .footer-subscribe {
      width: auto;
      flex: 1;
    }
  }
  
  @media (min-width: 1440px) {
    .footer-info {
      gap: 160px;
    }
  }
  
  .footer-nav {
    min-width: 240px;
  }
  
  .nav-title {
    color: #fff;
    font-family: Space Mono, monospace;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.6;
    text-transform: capitalize;
  }
  
  .nav-links {
    list-style: none;
    padding: 0;
    margin: 25px 0 0;
  }
  
  .nav-links li {
    margin-bottom: 20px;
  }
  
  .nav-links a {
    color: #ccc;
    font-family: Work Sans, sans-serif;
    font-size: 16px;
    text-decoration: none;
    line-height: 1.4;
  }
  
  .footer-subscribe {
    min-width: 240px;
    max-width: 420px;
  }
  
  .subscribe-title {
    color: #fff;
    font-family: Space Mono, monospace;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.6;
    text-transform: capitalize;
  }
  
  .subscribe-content {
    margin-top: 25px;
  }
  
  .subscribe-description {
    color: #ccc;
    font-family: Work Sans, sans-serif;
    font-size: 16px;
    line-height: 22px;
  }
  
  /* Formulario con drop shadow en el botón */
  .subscribe-form {
    display: flex;
    margin-top: 20px;
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
  }
  
  .email-input {
    flex: 1;
    padding: 0 20px;
    height: 60px;
    border: none;
    font-family: Work Sans, sans-serif;
    font-size: 16px;
  }
  
  .email-input:focus {
    outline: none;
  }
  
  .subscribe-button {
    background: linear-gradient(128deg, #a259ff 49.75%, #377df7 103.23%);
    border: none;
    padding: 0 50px;
    color: #fff;
    font-family: Work Sans, sans-serif;
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
  
  .footer-bottom {
    margin-top: 49px;
  }
  
  .divider {
    height: 1px;
    background-color: #858584;
    border: none;
  }
  
  .copyright {
    color: #ccc;
    font-family: Work Sans, sans-serif;
    font-size: 12px;
    margin-top: 20px;
  }
  
  @media (max-width: 991px) {
    .site-footer {
      padding: 34px 20px;
    }
  
    .footer-info {
      gap: 40px;
    }
  
    .footer-bottom {
      margin-top: 40px;
    }
  
    .subscribe-button {
      padding: 0 20px;
    }
  }
  </style>
  