<template>
  <div class="columns">
    <div class="column is-one-quarter">
      <div class="card" v-for="(evento,index) in eventos" :key="index">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="evento.imagen" alt="Placeholder image">            
          </figure>
          <span class="tag tag_card is-success" v-for="(capitulo,i) in evento.capitulos" :key="i">{{capitulo.nombre}}</span>
        </div>
        <div class="card-content">

          <div class="content">
               <p class="title is-4" v-text="evento.titulo"> </p>
            {{evento.descripcion}}
            <a href="#">Tag 1</a>
            <a href="#">Tag 2</a>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </div>

    
  <div class="column">Auto</div>
  <div class="column">Auto</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventos: [
        {
          titulo: "I Simposio de Energías Renovables",
          imagen:
            "http://udep.edu.pe/ingenieria/files/2017/06/Portada-web-simposio-05.png",
          descripcion:
            "El simposio reunirá a investigadores, profesionales, empresarios y estudiantes con la finalidad de promover el intercambio de ideas, la difusión de la investigación y experiencias relacionadas al desarrollo y aplicación de energías renovables en el Perú y el mundo.",
          hora: "9:00 a.m.",
          fecha: "20 julio 2017",
          capitulos: {
            0: {
              nombre: "IAS"
            }
          },
          tags: {
            0: {
              nombre: "Simposio"
            },
            1: {
              nombre: "Energías renovables"
            }
          }
        }
      ]
    };
  }
};
</script>


<style>
.card {
  margin: 10px;
}

.card .tag_card {
  position: absolute;
  bottom: 5px;
  left: 5px;
}
</style>
