<template>
  <div class="con">
    <img height="100px" width="100px" src="../img/tesla.png" alt="me">
   <div>
     <p>Hi, may I introduce myself?<font-awesome-icon class="i"  :icon="{ prefix: 'fa', iconName: 'smile' }" /></p>
     </div> 
  </div>
</template>

<script>
export default {
  name: "ImageNag"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style skoped>
img {
  border: solid red;
  border-radius: 50%;
}
.con {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
h3 {
  font-family: "Roboto Mono", monospace;
}
  .i{
    font-size:1.2em;
    margin-left:5px
  }
</style>
