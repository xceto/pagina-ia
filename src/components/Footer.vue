<template>
  <v-footer dark>
    <v-container class="d-flex mx-auto">
      <v-col class=" mr-auto" cols="12" sm="6">
        <v-container>
          <div class="d-wrap">
            <v-img
              src="https://media.istockphoto.com/photos/artificial-intelligence-picture-id1147184161?k=20&m=1147184161&s=612x612&w=0&h=eY8rP4M5ucnGpuOqoZvmBkvQeCOoiMWSLx0G3Tytzxw="
              height="150px"
              width="150px"
              class="mx-auto"
            ></v-img>
            <v-card-text class="text-center">
              <v-card-subtitle class=" text-center d-sm-block">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur pariatur culpa quam earum ratione illum corrupti sed
                saepe
              </v-card-subtitle>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                icon
              >
                <v-icon size="24px" color="#66FF00">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-text>
          </div>
        </v-container>
      </v-col>
      <div class="mx-auto enlaces" cols="12" md="6">
        <v-col >
          <v-list sm="2" md="2"
            >Enlaces
            <v-list-item>
              <v-btn exact class="pl-0" color="#DBDBDB" plain href="#nosotros" v-t="'nosotros.titulo'">
              
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn
                exact
                class="pl-0"
                color="#DBDBDB"
                plain
                href="#soluciones"
                v-t="'soluciones.titulo'"
              >
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn exact class="pl-0" color="#DBDBDB" plain href="#contacto" v-t="'contacto.titulo'">
              </v-btn>
            </v-list-item>
          </v-list>
        </v-col>
        <v-divider></v-divider>

        <v-col class="d-flex enlacesServicios" cols="12" sm="4">
          <v-list>

          <h4 v-t="'soluciones.titulo'"></h4>
          <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{ $t('soluciones.card.titulo_card_1') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{ $t('soluciones.card.titulo_card_2') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{ $t('soluciones.card.titulo_card_3') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{ $t('soluciones.card.titulo_card_4') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{ $t('soluciones.card.titulo_card_5') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
          </v-list>
        </v-col>
      </div>
    </v-container>
    <v-card-text class="white--text text-center">
      {{ new Date().getFullYear() }} — <strong>by Vanessa Riquelme</strong>
    </v-card-text>
  </v-footer>
</template>

<script scoped>
export default {
  data: () => ({
    icons: ["mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    model: 1,
  }),
  // computed:{
  //   items: [
  //     {
  //       icon: "mdi-inbox",
  //       text: this.$t('soluciones.card.titulo_card_1'),
  //     },
  //     {
  //       icon: "mdi-star",
  //       text: "Predicción de la demanda",
  //     },
  //     {
  //       icon: "mdi-send",
  //       text: "lustering segmentation",
  //     },
  //     {
  //       icon: "mdi-email-open",
  //       text: "Optimización de procesos",
  //     },
  //     {
  //       icon: "mdi-email-open",
  //       text: "Modelos personalizados",
  //     },
  //   ],
  // }
};
</script>

<style scoped>
.enlaces {
  display: none;
}

@media (min-width: 600px) {
  .enlaces {
    display: block;
    justify-content: space-around;
    align-items: center;
  }
}
@media (min-width: 1024px) {
  .enlaces {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
  .v-divider {
    display: none;
  }
  .col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 20%;
}
}
.theme--dark {
  background: none;
}
.v-list {
  font-size: 1.2em;
}
.v-list-item {
  padding: 0;
  font-size: 0.5em;
}
.enlacesServicios {
  font-size-adjust: inherit;
}
.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #dbdbdb !important;
}
</style>
