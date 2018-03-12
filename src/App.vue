<template>
  <div id="app">

    <!-- Header -->
    <section class="hero is-success is-medium">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <header class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroC">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroC" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active">
                  Home
                </a>
                <a class="navbar-item">
                  Examples
                </a>
                <a class="navbar-item">
                  Documentation
                </a>
                <span class="navbar-item">
                  <a class="button is-success is-inverted">
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Title
          </h1>
          <h2 class="subtitle">
            Subtitle
          </h2>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li v-for="(page,index) in pages" :key="index">
                 <router-link :to="page.link" v-text="page.titulo"></router-link>
              </li>        
            </ul>
          </div>
        </nav>
      </div>
    </section>


    <!-- container -->
    <div class="container">



      <router-view/>
    </div>




    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <div class="columns is-mobile is-multiline">

            <div class="column is-half-mobile">
              Contacto correo telefono
            </div>
            <div class="column is-half-mobile">
              Social Media Face github
            </div>

          </div>
          <p>
            Copyright © 2018 IEEE Universidad de Piura - Sede Lima. Hecho por Hans
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pages: [
        { titulo: "Inicio", link: "/Inicio" },
        { titulo: "Nosotros", link: "/Nosotros" },
        { titulo: "Eventos", link: "/Eventos" },
        { titulo: "Contacto", link: "/Contacto" }
      ]
    };
  }
};
</script>

<style>
#app {
  color: #2c3e50;
}

.footer {
  position: relative;
  bottom: 0px;
  width: 100%;
  padding: 2rem 1.5rem 2rem;
}
</style>
