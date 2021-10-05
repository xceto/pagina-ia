<template>
  <v-container  fluid>
    <Carousel />
    <Servicios />
    <Nosotros class="mt-10" />
    <Ubicacion />
    <Footer />
  </v-container>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Nosotros from '@/views/Nosotros.vue'
import Ubicacion from '@/components/Ubicacion.vue'
import Servicios from '@/views/Servicios.vue'
import Footer from '@/components/Footer.vue'

  export default {
    name: 'Home',

    components: {
      Carousel,
      Nosotros,
      Servicios,
      Ubicacion,
      Footer
    },
    data: () => ({
      isActive: false,
    }),
  }
</script>
<style scoped>
.container{
  padding: 0;
}
</style>
