<template>
  <div class="p-2 bg-albank-1 min-h-screen">
    <div class="rounded-2xl">
      <!-- <Navbar></Navbar> -->
    </div>
    <!-- <Sidebar></Sidebar> -->
    <div class="rounded-2xl mt-2">
      <div class="">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import Navbar from "./Navbar.vue";
// import Sidebar from "./Sidebar.vue";
// import { inject } from "vue";

export default {
  name: "Main",
  components: {},
  setup(): void {
    // const useAuth = inject("auth");
    // const { isLogged } = useAuth;
    // isLogged();
  },
};
</script>
