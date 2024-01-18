<template>
    <div class="containeur">
        <div class="content">
            <div id="content">
                <h1> HUMANS OF NEW YORK </h1>
                <h2> {{ big_title }} </h2>
                <a href="/article"> READ SERIES </a>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
name: 'Section',
props:{
    big_title:"",
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.containeur{
    height: 550px;
    background-color: rgb(238, 228, 219);
    background-image: url('@/assets/6.jpg');
    background-position: 100% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
}
.content{
    max-width: 900px;
    text-align: right;
    margin: auto;
    position: absolute;
    left: auto;
    right: 33%;
}
#content{
    margin-top: 85px;
    text-align: center;
    width: auto;
    float: right;
    h1{
        font-family: "Akzidenz-Grotesk BQ";
        letter-spacing: 3px;
        margin-bottom: 4px;
        font-size: 20px;
        color: #000;
    };
    h2{
        font-family: 'GT Sectra Display Light';
        font-weight: lighter;
        line-height: 130px;
        font-size: 140px;
        margin-top: 4px;
        margin-bottom: 25px;
    };
    a{
        background: none;
        border: 1px solid black;
        padding: 17px 35px;
        font-family: 'Merriweather';
        font-weight: bold;
        letter-spacing: 3px;
        font-size: 11px;
        outline: 0px;
        position: relative;
        z-index: 1;
        color: #000;
        text-decoration: none;
    }
    a:hover{
        color: #fff;
        background-color: #000;
    }
}
</style>
