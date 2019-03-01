<template>
  <div>
    <p class="click" @click="show">/About me:</p>
    <div v-show="isOpen">
        <p>Hi my name is maciek</p>
        <p>I from Poland where I going to primary school</p>
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

