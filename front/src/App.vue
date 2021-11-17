<template>
  <SliferLayout>
    <template #mainpage>
      <div class="bg-albank-1 min-h-screen">
        <router-view></router-view>
      </div>
    </template>
    <template #footer>
      <Footer></Footer>
    </template>
  </SliferLayout>
</template>

<script>
import SliferLayout from "./views/layouts/SliferLayout.vue";
import Footer from "./views/layouts/Footer.vue";
import { Provides } from "./provides/index";
export default {
  name: "App",
  components: {
    SliferLayout,
    Footer,
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    Provides();
  },
};
</script>
<style>
@import "../node_modules/slifer/src/assets/styles/slifer-style.css";
</style>
