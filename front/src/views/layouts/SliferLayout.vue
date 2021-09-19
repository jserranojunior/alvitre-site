<template>
  <div class="dark:bg-gray-900 dark:text-gray-100">
    <nav
      class="font-sans flex flex-wrap justify-between sm:text-left sm:justify-between py-2 px-6 bg-white sm:items-baseline w-full dark:bg-gray-800 dark:text-gray-100 shadow-md border-b border-gray-100 dark:border-gray-700 no-print"
      v-if="this.$slots.header"
    >
      <slot name="header"></slot>
    </nav>
    <div
      class="flex w-full h-screen bg-white text-dark dark:bg-gray-700 dark:text-gray-100"
    >
      <div
        class="sidebar w-64 bg-white text-dark rounded p-1 shadow-lg dark:bg-gray-700 dark:text-gray-100 no-print"
        v-if="this.$slots.sidebar"
      >
        <div class="flex flex-wrap items-center p-1 text-sm">
          <slot name="sidebar"></slot>
        </div>
      </div>
      <!-- sm:w-8/12 md:w-10/12 lg:w-11/12 xl:w-11/12  -->
      <div class="w-full p-2 bg-albank-1 dark:bg-gray-600 dark:text-gray-100">
        <slot name="mainpage"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
