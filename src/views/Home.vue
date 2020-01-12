<template>
  <div class="home">
    <moon :theme="theme" @changeTheme='updateTheme($event)'/>
    <ImageNag :theme="theme" />
    <aboutMe :theme="theme" />
    <projects :theme="theme"/>
    <contact :theme="theme"/>
    <foot :theme="theme"/>
  </div>
</template>

<script>
/* @ is an alias to /src*/
import ImageNag from '@/components/ImageNag.vue'
import projects from '@/components/projects.vue'
import aboutMe from  '@/components/aboutMe.vue'
import contact from  '@/components/contact.vue'
import foot from '@/components/footer.vue'
import moon from '@/components/moon.vue'
export default {
  name: 'home',
  components: {
    ImageNag,projects,aboutMe,contact,foot,moon
  },
  data() {
    return {
      theme:'rgb(12, 179, 12)'
    }
  },
  methods:{
    updateTheme:function(updatedTheme){
      this.theme=updatedTheme
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
body{
  font-size:1em;
  margin:5vh;
  margin-bottom:0;
  font-family: 'Roboto Mono', monospace;
  background-image: url('../assets/darkness.png');/*This pattern is downloaded from www.subtlepatterns.com*/
  /*background-size:cover;*/
  
}
@media screen and ( max-width: 600px ) {
  body{
    font-size:0.9em
  }
}
@media screen and ( max-width: 750px ) {
  body{
    font-size:0.8em
  }
}
div p{
  font-size: 1em;
  font-family: 'Roboto Mono', monospace;
  margin:8px;
  text-align: center;
  transition:0.2s linear;
}

.click{
  cursor:pointer;
  color:red;
}
a{
  text-decoration:none;
  transition:0.2s linear;
}
</style>
