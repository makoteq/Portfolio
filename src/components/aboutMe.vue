<template>
  <div>
    <p class="click" @click="show">/About me:</p>
    <div v-show="isOpen">
        <p>My name is Maciej</p>
        <p>I'm 14 years programer</p>
        <p>At the moment I living in Poland</p>
        <p>Currently I make front-end websites</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutMe",
  data() {
        return {
             isOpen: false,
        }
    },
     methods: {
    show: function() {
      this.isOpen = !this.isOpen
    }
}
}
</script>
<style >

</style>

