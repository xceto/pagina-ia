<template>
  <v-app-bar
      app
      height="70px"
      fixed
    >
      <img src="@/assets/cerebro-tecnologia.jpeg" alt="">

      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp" class="shrink">
        <v-btn exact color="#4F3701" plain :to="{name: 'Home'}"
        >
          Inicio
        </v-btn>

        <v-btn exact color="#4F3701" plain :to="{name: 'Nosotros'}"
        >
          Nosotros
        </v-btn>
        <v-btn
          exact color="#4F3701" plain :to="{name: 'Servicios'}"
        >
          Servicios
         
        </v-btn>
        <v-btn exact color="#4F3701" plain :to="{name: 'Contacto'}"
        >
          Contacto
        </v-btn>
      
        <!-- <v-btn icon class="ml-16">
          <v-icon color="#4F3701">mdi-magnify</v-icon>
        </v-btn>
       -->
        <!-- <v-btn icon :to="{name: 'Login'}">
          <v-icon color="#4F3701">mdi-account-outline</v-icon>
        </v-btn> -->
      </v-toolbar-items>

      <v-app-bar-nav-icon v-else @click="setDrawer(true)" />
    </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: 'App',

  data: () => ({
      items: [
        { title: 'Home' },
        { title: 'Nosotros' },
        { title: 'Servicios' },
        { title: 'Contacto' },
      ],
    }),
  computed: {
    ...mapState(["links"]),
  },
  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),
  },
};
</script>

<style scoped>

img {
  width: 5rem;
  margin-left: 0;
  border-radius: 30%;
}
.v-btn {
  text-transform: capitalize;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
.v-btn:hover {
  text-decoration: none;
}
.v-list-item:hover {
  text-decoration: none;
  color: #4F3701;
  opacity: 0.7;
}
</style>