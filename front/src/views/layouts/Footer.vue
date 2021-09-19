<template>
  <footer>
    <div class="flex">
      <div class="w-full text-center">
        <a href="https://www.facebook.com/alvitrenet/?ref=br_rs">
          <button class="m-2" aria-label="facebook">
            <i class="fab fa-2x text-blue-600 fa-facebook-square" aria-hidden="true"></i>
          </button>
        </a>
        <a name="instagram" href="https://www.instagram.com/alvitreempresa/?hl=pt-br">
          <button class="m-2" aria-label="instagram">
            <i class="fab fa-2x text-red-600 fa-instagram" aria-hidden="true"></i>
          </button>
        </a>
        <a class="whatsapp" href="https://web.whatsapp.com/send?phone=5511946439695">
          <button class="m-2" aria-label="whatsapp">
            <i class="fab fa-2x text-green-600 fa-whatsapp" aria-hidden="true"></i>
          </button>
        </a>
      </div>
    </div>

    <div class="flex mb-2">
      <div class="w-full text-center">
        <p>
          <span class="text-blue-800 font-bold">Alvitre</span> 2020 -Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
