<template>
  <AddEditContas :mode="'edit'"></AddEditContas>
</template>
<script>
import AddEditContas from "../components/AddEditContas.vue";
export default {
  name: "EditarConta",
  components: {
    AddEditContas,
  },
  data() {
    return {};
  },
};
</script>
