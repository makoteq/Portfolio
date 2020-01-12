<template>
    <div>
        <p class="footer">
        <a class="hiper" target="_blank" href="https://github.com/makoteq"> 
        Makotek </a><font-awesome-icon :icon="{ prefix: 'fas', iconName: 'copyright' }"/> 2019
        </p>
    </div>
</template>

<script>
export default {
    name:'foot',
    }
</script>

<style skoped>
.footer {
    margin:0;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: red;
    color: white;
    text-align: center;
    font-size:15px;
}
.hiper{
    color:white;
}
</style>
