<template>
  <header>
    <button @click="decrementCount">Click</button>
    <div>{{ value }}</div>
  </header>
</template>

<script>
export default {
  data: function() {
    return {
      value: 10,
    };
  },
  methods: {
    decrementCount() {
      this.value--;
    },
  },
};
</script>

<style></style>
