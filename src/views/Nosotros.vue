<template>
  <v-container class="mt-15 mb-5">
    <h2 class="text-center">Nosotros</h2>
    <v-row>

    <v-card class="mx-auto mb-md-5 mb-sm-5 my-5" max-width="344" v-for="(item, index) in items" :key="index" cols="12" lg="3" md="6" sm="12">
      <v-img
        :src="item.imagen"
        height="200px"
      ></v-img>

      <v-card-title>
       {{ item.titulo }}
      </v-card-title>

      <v-card-subtitle>
        {{ item.descripcion }}
      </v-card-subtitle>
      <v-divider></v-divider>
          <v-card-text>{{item.masInfo}}
          </v-card-text>
    </v-card>
    </v-row>

  </v-container>
</template>
<script>
export default {
  data: () => ({
    show: false,
    items: [
      {
        imagen: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        titulo: "asdasdasdasd",
        descripcion: "asdasdasdasd",
        masInfo:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! you're going to do his laundry? I've got to find a way to escape.",
      },
       {
        imagen: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        titulo: "asdasdasdasd",
        descripcion: "asdasdasdasd",
        masInfo:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! you're going to do his laundry? I've got to find a way to escape.",
      },
       {
        imagen: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        titulo: "asdasdasdasd",
        descripcion: "asdasdasdasd",
        masInfo:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! you're going to do his laundry? I've got to find a way to escape.",
      },
    ],
  }),
};
</script>
<style scoped>
h2 {
  font-size: 3em;
}
</style>
