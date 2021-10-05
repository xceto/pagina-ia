<template>
  <footer>
      <div class="footer-menu">
        <img src="" class="footer-img">
        <div class="list-absolute mb-14">
            <img src="@/assets/cerebro-tecnologia.jpeg" class="logo-kolibri-1 pl-sm-10 pl-lg-0">
            <ul class="list-none">
                <li class="text-bold">Enlances</li>
                <li>Nosotros</li>
                <li>Servicios</li>
                <li>Contáctanos</li>
            </ul>
            <ul class="list-none">
                <li class="text-bold">Contacto</li>
                <li><v-icon color="#4F3701">mdi-whatsapp</v-icon><span> +569 12345678</span></li>
                <li><v-icon color="#4F3701">mdi-email-outline</v-icon><span> IA@gmail.com</span></li>
            </ul>
            <div class="row only-mob">
            <ul class="list-none-mob text-footer-mob mt-8">
                <li><v-icon color="#0b0b0b">mdi-instagram</v-icon><span> @IA</span></li>
                <li><v-icon color="#0b0b0b">mdi-whatsapp</v-icon><span> +569 12345678</span></li>
                <li><v-icon color="#0b0b0b">mdi-email-outline</v-icon><span> IA@gmail.com</span></li>
            </ul>
            </div>
      </div>
      </div>
      <div data-tf-widget="XPQEKFu0" style="width:100%;height:400px;"></div>

  </footer>
</template>

<script>
export default {
}
</script>

<style>
li, span {
  font-family: "Montserrat", sans-serif;
}
li {
  font-weight: 500;
}
@media screen and (min-width: 899px) {
.footer-menu {
    display: flex;
    justify-content: space-around;
    position: relative;
    align-items: center;
}
ul.list-none {
    list-style-type: none;
}
li {
    padding: 10px;
    padding-right: 30px;
}
.list-absolute {
    position: absolute;
    display: flex;
    justify-content: space-around;
}
.text-bold {
    font-weight: 700;
    color: #0b0b0b;
}
.footer-img {
    width: 100%;
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    opacity: .4;
}
.logo-kolibri-1 {
    height: 150px;
    position: relative;
    right: 50px;
    border-radius: 20%;
}
.only-mob {
    display: none;
}
}
@media screen and (max-width: 898px) {
    .footer-img {
        width: 100%;
        height: 180px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        opacity: .4;
    }
    .list-none {
        display: none;
    }
    .logo-kolibri-1{
        display: none;
    }
    .logo-kolibri-2{
        height: 100px;
        padding-left: 1rem;
    }
    .only-mob {
        position: relative;
        display: flex;
        justify-content: space-around;
    }
    ul.list-none-mob {
    list-style-type: none;
    }
    li {
    padding: 7px;
    padding-right: 30px;
    }
    .text-footer-mob {
        color: #060606;
    }
    
}
</style>
