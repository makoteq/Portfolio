<template>
  <div :style="{color:theme}">
    <p class="click" @click="show">/About me:</p>
    <div v-show="isOpen">
        <p>My name is Maciej</p>
        <p>I'm 14 years programer ,currently I make front-end websites</p>
        <p>I living in Poland</p>
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
},
  props:{
    theme:String
  }
}
</script>
<style >

</style>

