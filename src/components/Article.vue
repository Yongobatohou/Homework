<template>
    <div style="background: #f8f8f8;">
        <div class="containeur">
            <Navbar />
            <div class="content">
                <div id="content">
                    <p class="tete">
                        <p> {{ badge }} </p>
                        <h1> HUMANS OF NEW YORK </h1>
                    </p>
                    <h2> {{ big_title }} </h2>
                    <p class="desc"> {{ description }} </p>
                </div>
            </div>
        </div>
        <div class="section2">
            <img class="badg" src="@/assets/white.png" alt="">
                <div id="text">
                    {{ text }}
                </div>
            <div id="hr"></div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'


export default {
name: 'Section',
props:{
    badge:"",
    big_title:"",
    description:"",
    text:"",
},  
    components:{
        Navbar,
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.containeur{
    height: 650px;
    background-color: rgb(238, 228, 219);
    background-position: 100% 150%;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    color: #000;
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
    margin-top: 0;
    width: auto;
    float: left;
    margin-right: 200px;
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
        line-height: 110px;
        font-size: 140px;
        font-family: 'GT Sectra Display Light';
        margin-bottom: 25px;
    };
}
.tete{
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: start;
    position: relative;
    width: 90%;
    color: black;
    left: 63px;
    p{
        border-bottom: solid 2px black;
        border-left: solid 2px black;
        border-right: solid 2px black;    
        padding: 35px 5px 5px 5px;
        font-weight: bolder;
        float: left;
        width: 95px;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 1px;
        font-weight: 300;
    }   
    h1{
        padding-top: 30px;
        padding-left: 60px;
    }
}
.desc{
    font-family: 'GT Sectra Display';
    font-size: 24px;
    width: 370px;
    letter-spacing: 1px;
    margin: auto;
}
.badg{
    margin-top: 60px;
    margin-bottom: 30px;
}
#text{
    font-size: 37px;
    font-family: "GT Sectra Display";
    margin-bottom: 20px;
    text-align: center;
    width: 70%;
    margin: auto;
}
#hr{
    width: 1px;
    height: 120px;
    background: #000;
    margin: auto;
    margin-top: 60px;
}
</style>
