<template>
  <v-container  fluid>
    <Carousel />
    <Soluciones />
    <Nosotros class="mt-10 fondo" />
    <Contacto />
    <Footer class="fondo"/>
  </v-container>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Nosotros from '@/views/Nosotros.vue'
import Soluciones from '@/views/Soluciones.vue'
import Contacto from '@/views/Contacto.vue'
import Footer from '@/components/Footer.vue'

  export default {
    name: 'Home',

    components: {
      Carousel,
      Nosotros,
      Soluciones,
      Contacto,
      Footer
    },
    data: () => ({
      isActive: false,
    }),
  }
</script>
<style scoped>
.fondo{
  background-color: #212121;
}
.container{
  padding: 0;
}
</style>
