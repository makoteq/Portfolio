<template>
  <div>
    <p class="click" @click="show">/Contact for me:</p>
    <div v-show="isOpen">
      <p>Mail:makoteq@gmail.com</p>
      <p>
        Facebook
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>:
        <a target="_blank" href="https://www.facebook.com/maciej.kotowski.712">clickMe!</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    show: function() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style>
</style>
