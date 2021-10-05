<template>
  <v-navigation-drawer v-model="drawer" right fixed temporary>
    <v-list class="mt-3">
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="{
          name: link,
        }"
        min-width="118px"
        exact
        text
      >
        <v-list-item-content>
          <v-list-item-title v-text="link" />
        </v-list-item-content>   
      </v-list-item>
      
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities


export default {
  name: "Drawer",
  data: () => ({
    links: [
      'Home',
      'Nosotros',
      'Contacto',
    ],
  }),
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
  },
};
</script>

<style scoped>
.v-list-item:hover {
  text-decoration: none;
  color: #4F3701;
  opacity: 0.7;
}
.v-list-item {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
</style>