<template>
  <div>
    <form>
      <input
        v-model="selectedDate"
        type="date"
        name="calendario"
        class="cursor-pointer w-full bg-gray-600 appearance-none border-2 border-gray-600 rounded py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:bg-gray-500 focus:border-purple-500"
      />
    </form>
  </div>
</template>
<script>
import { inject, watch, ref } from "vue";
export default {
  setup() {
    const useFinancial = inject("financial");
    const { setDataCalendario, Calendario } = useFinancial;
    let selectedDate = ref(Calendario.value.selectedDate);

    watch(selectedDate, () => {
      setDataCalendario(selectedDate.value);
    });

    function changeMonth(type) {
      console.log(type);
    }
    return { changeMonth, selectedDate };
  },
};
</script>
