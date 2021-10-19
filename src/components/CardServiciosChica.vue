<template>
    <div class="px-6">
        <v-card class="mx-auto card-chica mb-5 ">
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHt_GDPuWXUIapWV051zGUv2lRVMtLt90PQQ&usqp=CAU"  data-aos="zoom-in" data-aos-duration="2000"></v-img>

            <div class="px-3 py-4">
              <v-card-title
                class="titulo-card pt-7 pb-5"
                v-t="'soluciones.card.titulo_card_1'"
              ></v-card-title>

              <v-card-subtitle
                class="texto-card pb-3"
                v-t="'soluciones.card.texto_card_1'"
              ></v-card-subtitle>
               
            </div>
          </v-card>
          <v-card class="mx-auto card-chica mb-5">
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzNGnBZXcZy8fbBLQvDkUf2noCI4PgbIwuQ&usqp=CAU"  data-aos="zoom-in" data-aos-duration="2000"></v-img>

            <div class="px-3 py-4">
              <v-card-title
                class="titulo-card pt-7 pb-5"
                v-t="'soluciones.card.titulo_card_2'"
              ></v-card-title>

              <v-card-subtitle
                class="texto-card pb-3"
                v-t="'soluciones.card.texto_card_2'"
              ></v-card-subtitle>
                
            </div>
          </v-card>
          <v-card class="mx-auto card-chica mb-5">
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Me0aoCFNqTFbL3Z5HJmuPbt6WloG7UHZPQ&usqp=CAU"  data-aos="zoom-in" data-aos-duration="2000"></v-img>

            <div class="px-3 py-4">
              <v-card-title
                class="titulo-card pt-7 pb-5"
                v-t="'soluciones.card.titulo_card_3'"
              ></v-card-title>

              <v-card-subtitle
                class="texto-card pb-3"
                v-t="'soluciones.card.texto_card_3'"
              ></v-card-subtitle>
               
            </div>
          </v-card>
           <v-card class="mx-auto card-chica mb-5">
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYxeT8WBHoCfsRKbZQx82u9DcqYIpNsJRfJQ&usqp=CAU"  data-aos="zoom-in" data-aos-duration="2000"></v-img>

            <div class="px-3 py-4">
              <v-card-title
                class="titulo-card pt-7 pb-5"
                v-t="'soluciones.card.titulo_card_4'"
              ></v-card-title>

              <v-card-subtitle
                class="texto-card pb-3"
                v-t="'soluciones.card.texto_card_4'"
              ></v-card-subtitle> 
            </div>
          </v-card>
           <v-card class="mx-auto card-chica ">
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLlDVBZwe8aELUXh4xVTZ_99OR3jWaf4N7Dw&usqp=CAU"  data-aos="zoom-in" data-aos-duration="3000"></v-img>

            <div class="px-3 py-4">
              <v-card-title
                class="titulo-card pt-7 pb-5"
                v-t="'soluciones.card.titulo_card_5'"
              >Optimización de procesos</v-card-title>

              <v-card-subtitle
                class="texto-card pb-3"
                v-t="'soluciones.card.texto_card_5'"
              ></v-card-subtitle>
               
            </div>
          </v-card>
    </div>
</template>
<script>
export default {
    name: 'CardServiciosChica',
}
</script>
<style scoped>
h2 {
  font-size: 2.1em;
}
.titulo-card{
  font-size: 1.1rem;
  color: #212121;
  margin-bottom: 0.8rem;
  text-align: center;
}
.texto-card {
  color: #212121;
}
p {
  color: #212121;
  font-size: .95rem;
}
span {
  color: #212121;
  font-weight: 600;
}
h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #212121;
}
.v-btn {
  font-weight: 600;

}
.card-grande {
  display: none;
}
</style>