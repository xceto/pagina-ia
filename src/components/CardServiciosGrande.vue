<template>
  <div class="tarjetaGrande">
    <v-card class="mt-2 card-grande d-sm-flex flex-no-wrap ">
      <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHt_GDPuWXUIapWV051zGUv2lRVMtLt90PQQ&usqp=CAU" height="310px" class="mr-lg-14 imgcardGrande " data-aos="zoom-in" data-aos-duration="1000"></v-img>
      
      <div class="justify-center text-center body-card " data-aos="fade-right" data-aos-duration="3000">
        <h3 class="titulo-card pt-5 pt-md-10 pb-5" v-t="'soluciones.card.titulo_card_1'"></h3>

        <v-card-subtitle
          class="texto-card pb-3 pt-lg-2 pb-lg-6"
          v-t="'soluciones.card.texto_card_1'"
        ></v-card-subtitle>
       
      </div>
    </v-card>
    <v-card class="my-5 card-grande d-sm-flex flex-no-wrap my-14">
      <div class="justify-center text-center body-card " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
        <h3 class="titulo-card pt-5 pt-md-10 pb-5" v-t="'soluciones.card.titulo_card_2'"></h3>

        <v-card-subtitle
          class="texto-card texto-card-left pb-3 pt-lg-2 pb-lg-6 ml-0"
          v-t="'soluciones.card.texto_card_2'"
        ></v-card-subtitle>
       
      </div>
      <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzNGnBZXcZy8fbBLQvDkUf2noCI4PgbIwuQ&usqp=CAU" height="310px" class="ml-lg-14 imgcardGrande" data-aos="zoom-in" data-aos-duration="1000"></v-img>
    </v-card>
    <v-card class="my-5 card-grande d-sm-flex flex-no-wrap my-14">
      <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Me0aoCFNqTFbL3Z5HJmuPbt6WloG7UHZPQ&usqp=CAU" height="310px"  class="mr-lg-14 imgcardGrande " data-aos="zoom-in" data-aos-duration="1000"></v-img>
      <div class="justify-center text-center body-card " data-aos="fade-right" data-aos-duration="3000">
        <h3 class="titulo-card pt-5 pt-md-10 pb-5" v-t="'soluciones.card.titulo_card_3'"></h3>

        <v-card-subtitle
          class="texto-card pb-3 pt-lg-2 pb-lg-6"
          v-t="'soluciones.card.texto_card_3'"
        ></v-card-subtitle>
       
      </div>
    </v-card>
    <v-card class="my-5 card-grande d-sm-flex flex-no-wrap my-14">
      <div class="justify-center text-center body-card " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
        <h3 class="titulo-card pt-5 pt-md-10 pb-5" v-t="'soluciones.card.titulo_card_4'"></h3>

        <v-card-subtitle
          class="texto-card texto-card-left pb-3 pt-lg-2 pb-lg-6"
          v-t="'soluciones.card.texto_card_4'"
        ></v-card-subtitle>
        
      </div>
      <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYxeT8WBHoCfsRKbZQx82u9DcqYIpNsJRfJQ&usqp=CAU" height="310px" class="imgcardGrande " data-aos="zoom-in" data-aos-duration="1000"></v-img>
    </v-card>
    <v-card class="my-5 card-grande d-sm-flex flex-no-wrap my-14">
      <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLlDVBZwe8aELUXh4xVTZ_99OR3jWaf4N7Dw&usqp=CAU" height="310px" class="mr-lg-14 imgcardGrande " data-aos="zoom-in" data-aos-duration="1000"></v-img>
      <div class="justify-center text-center body-card " data-aos="fade-right" data-aos-duration="3000">
        <h3 class="titulo-card pt-5 pt-md-10 pb-5" v-t="'soluciones.card.titulo_card_5'"></h3>

        <v-card-subtitle
          class="texto-card pb-3 pt-lg-2 pb-lg-6"
          v-t="'soluciones.card.texto_card_5'"
        > </v-card-subtitle>
       
      </div>
    </v-card>
    
  </div>
</template>
<script>
export default {
  name: "CardServiciosGrande",
  data: () => ({
    
  }),
};
</script>

<style scoped>
.v-image{
  width: 10%;
  transition: all 0.4s ease;
  box-shadow: 6px 8px 14px rgba(0, 0, 0, 0.30);
}
.v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none;
}
h2 {
  font-size: 2.1em;
}
.titulo-card{
  font-size: 2rem;
  color: #212121;
  margin-bottom: 0.8rem;
  text-align: center;
}
.texto-card {
  color: #212121;
  margin-left: 20px;
}
.texto-card-left{
  margin-right: 30px;
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
  display: none;
}
@media (min-width: 600px){
  .tarjetaGrande{
    justify-content: center;
  }
  .imgcardGrande{
    min-width: 200px;
    margin: .5em 2em;
  }
  .body-card{
    width: 250px;
    height: 250px;
    text-align: center;
  }
  .texto-card{
    font-size: .7em;
    text-align: justify;
    margin-left: 0;
  }
  .titulo-card{
    font-size: 1.2em;
    height: 50px;
  }
  .card-grande{
    justify-content: space-around;
  }
}
@media (min-width: 710px){
  .body-card{
    width: 50%;
  }
  .tarjetaGrande{
    justify-content: center;
  }
  .imgcardGrande{
    width: 50%;
    margin: .5em 2em;
  }
  .body-card{
    width: 100%;
    height: 250px;
    text-align: center;
  }
  .texto-card{
    font-size: 1.2em;
    text-align: justify;
    margin-left: 0;
  }
  .titulo-card{
    font-size: 1.2em;
    height: 50px;
  }
  .card-grande{
    justify-content: space-around;
  }
}
@media (min-width: 1264px){
  img{
    width: 50%;
  }
  .body-card{
    width: 50%;
  }
}
</style>
