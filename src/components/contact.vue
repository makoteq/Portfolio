<template>
  <div :style="{color:theme}">
    <p class="click" @click="show">/Contact:</p>
    <div v-show="isOpen">
      <p>Mail:makoteq@gmail.com</p>
      <p>
        Facebook
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>:
        <a :style="{color:theme}" target="_blank" href="https://www.facebook.com/maciej.kotowski.712">clickMe!</a>
      </p>
      <p>Github  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }"/>:
      <a :style="{color:theme}" target="_blank" href="https://github.com/makoteq">clickMe!</a>
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
  },
    props:{
    theme:String
  }
};
</script>

<style>
</style>
