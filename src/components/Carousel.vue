<template>
<div>
  <v-carousel
    cycle
  hide-delimiters
    show-arrows-on-hover
    class="carousel mt-10">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
    
      :src="item.src"
      
    ></v-carousel-item>
    <v-img class="imagen" src="https://media.istockphoto.com/vectors/artificial-intelligence-neural-network-ai-with-digital-brain-is-face-vector-id1145990155?k=20&m=1145990155&s=612x612&w=0&h=fCdHHleOG1GMcmYqzfr_6lQySijag46f2NxsmBugG-s="></v-img>
  </v-carousel>

</div>
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
            src: 'https://media-exp1.licdn.com/dms/image/C4E16AQHv7CDGDpWviQ/profile-displaybackgroundimage-shrink_350_1400/0/1611079648725?e=1639008000&v=beta&t=_T0GQGKSgCEpZV9o397ORVpFOgEJIdAlMWUYa9_vgJs',
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
<style scoped>
@media (min-width: 600px){
  .carousel{
    display: block;
  }
  .imagen{
    display: none;
  }
}
</style>