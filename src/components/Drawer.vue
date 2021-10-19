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
        color="#5100d7"
      >
        <v-list-item-content>
          <v-list-item-title color="#5100d7" v-text="link" />
        </v-list-item-content>   
      </v-list-item>
      <LocalSwitcher />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import LocalSwitcher from './LocaleSwitcher.vue'


export default {
  name: "Drawer",
  components : {
    LocalSwitcher
  },
  data: () => ({
    links: [
      'Home',
      'Nosotros',
      'Soluciones',
      'Contacto'
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
  color: #7e12c6;
  opacity: 0.7;
}
.v-list-item {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 500;
  
}
</style>