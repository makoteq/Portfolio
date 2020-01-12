<template>
  <div :style="{color:theme}">
    <p class="click" @click="show">/My projects:</p>
    <div v-show="isOpen">
      <a :style="{color:theme}" :href="a.url" :key="a.id" target="_blank" v-for="a in projects">
        <font-awesome-icon class="i" :icon="{ prefix: 'fas', iconName: 'arrow-right' }"/>{{ a.project }}
        <br>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      projects: [
        { 
          id: 1,
          project: "makotek.pl",
          url: "http://makotek.pl"
         }
      ]
    }
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

<style skoped>
.i{
  margin-right:5px;
  font-size: 0.8em;
}
</style>
