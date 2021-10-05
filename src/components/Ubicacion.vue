<template>
<div class="background-color"> 
  <v-container>
    <v-row class="mt-3 mb-5 px-2">
      <v-col cols="12" md="6" class="pl-3 px-md-0">
        <div class="styleInfo pt-10">
          <h2 class="mb-12">Ubicación</h2>

          <div class="mb-7 d-flex">
            <v-icon large color="#4f3701">mdi-map-marker</v-icon>
            <div class="mt-1">
              <span>asdasdasd, #123</span><br>
              <span>asdasdasd.</span>
            </div>
          </div>

         <div class="mb-4">
            <v-icon large color="#4f3701">mdi-whatsapp</v-icon>
            <span>+56 9 12345678</span> <br> 
         </div>

          <div class="mb-2">
            <v-icon large color="#4f3701">mdi-email-outline</v-icon>
            <span>IA@gmail.com</span>
          </div>
          
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <div class="alturaMapa mt-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106559.88214651348!2d-70.58979985233447!3d-33.42334037290255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf19a8dab4bd%3A0x93c1479cef180269!2sLas%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1633403446177!5m2!1ses!2scl" width="374" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>

h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #4f3701;
  text-align: center;
}
.mapa {
  width: 100%;
}
.alturaMapa {
  border: 1px black solid;
  box-shadow: 6px 8px 14px rgba(0, 0, 0, 0.30);
}
@media (min-width: 768px) {
  .alturaMapa {
    width: 90%;
  }
  h2 {
    text-align: left;
  }
}
@media (min-width: 578px) {
  .background-color{
    background-color: #ebe9e9;
  }
}
span {
  color: #262626;
  font-size: 1em;
  margin-left: 0.7em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}

</style>
