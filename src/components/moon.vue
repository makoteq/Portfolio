<template>
    <font-awesome-icon
      :style="{color:theme}"
      @click="changeTheme"
      class="iconMoon"
      :icon="{ prefix: 'fas', iconName: 'cloud-sun' }"
    />
</template>

<script>
export default {
  name: "moon",
  data() {
    return {
      color: this.theme,
    };
  },
  methods: {
    changeTheme: function() {
        this.show=!this.show
      if (this.color == "rgb(12, 179, 12)") {
        this.color = "white";
      } else {
        this.color = "rgb(12, 179, 12)";
      }
      this.$emit("changeTheme", this.color);
    }
  },
  props: {
    theme: String
  }
};
</script>

<style skoped>
.iconMoon {
  font-size: 2em;
  position: absolute;
  right: 3%;
  top: 3%;
  cursor: pointer;
  transition:0.2s linear;
}
.iconMoon:hover {
  transform: scale(1.5)
}
</style>
