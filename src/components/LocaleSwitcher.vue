<template>
  <div class="locale-switcher">
      <div class="pa-5">

    <select id="locale" v-model="$i18n.locale" >
      <option v-for="locale in locales" :key="locale.key" :value="locale.key"> {{ locale.label }} 
      </option>
    </select>
    <label for="locale" aria-label="Locale"> <v-icon color="#DBDBDB" class="ml-2">mdi-earth</v-icon></label>
      </div>
  </div>
</template>

<script>
export default {
  name: "LocalSwitcher",
  data: () => ({
    locales: [
      { key: "es", label: "Español", src: "https://img.freeflagicons.com/thumb/rectangular_icon/spain/spain_640.png" },
      { key: "en", label: "English" , src: "https://img.freeflagicons.com/thumb/rectangular_icon/united_states_of_america/united_states_of_america_640.png"},
    ],
  }),
  created() {
    console.log(this.$i18n.locale);
  },
  watch: {
    "$i18n.locale": {
      handler(locale) {
        localStorage.setItem("locale", locale);
      },
    },
  },
};
</script>

<style scoped>
.locale-switcher{
    background-color: #5200d7;
    
}
select{
    color: #DBDBDB;
    font-weight: 400;
    font: inherit;
    cursor: pointer;
}
</style>
