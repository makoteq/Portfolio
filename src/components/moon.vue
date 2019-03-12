<template>
    <font-awesome-icon :style="{color:theme}" @click="changeTheme" class="iconMoon" :icon="{ prefix: 'fas', iconName: 'cloud-sun' }"/>
</template>

<script>
export default {
    name:'moon',
    data() {
        return {
            color:'white'
        }
    },
    methods:{
        changeTheme:function(){
            if(this.color=='white'){
                this.color='rgb(12, 179, 12)'
            }else{
                this.color='white'
            }
            this.$emit("changeTheme",this.color)
        }
    },
      props:{
    theme:String
  }
}
</script>

<style>
.iconMoon{ 
    font-size:2em;
    position:absolute;
    right:3%;
    top:3%;
    cursor: pointer;
    }

    
</style>
