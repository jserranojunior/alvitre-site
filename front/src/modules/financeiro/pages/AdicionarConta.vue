<template>
  <div>
    <AddEditContas :mode="'add'"></AddEditContas>
  </div>
</template>
<script>
import AddEditContas from "../components/AddEditContas.vue";
export default {
  name: "AdicionarConta",
  components: {
    AddEditContas,
  },
  data() {
    return {};
  },
};
</script>
