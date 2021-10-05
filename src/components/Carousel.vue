<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
      name: 'Carousel',
    data () {
      return {
        items: [
          {
            src: 'https://techdroy.com/wp-content/uploads/2019/07/inteligencia-artificial-banner.jpg',
          },
          {
            src: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-tech-wind-smart-ai-era-green-banner-poster-image_194416.jpg',
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdK29qrKFPQMupOssxe9tZT5FTSBoq4MfAqA&usqp=CAU',
          },
          {
            src: 'https://us.123rf.com/450wm/andreysuslov/andreysuslov1807/andreysuslov180700011/105236380-robot-humanoide-femenino-o-cyborg-con-inteligencia-artificial-hacia-los-lados-.jpg?ver=6',
          },
        ],
      }
    },
  }
</script>