<template>
  <button @click="handleClick">{{ isOn ? "On" : "Off" }}</button>
</template>

<script>
export default {
  data: function() {
    return {
      isOn: true,
    };
  },
  methods: {
    handleClick() {
      this.isOn = !this.isOn;
    },
  },
};
</script>

<style></style>
