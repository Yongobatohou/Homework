<template>
    <div class="contaneur">
        <div class="post">
            <div id="past">
                <img src="img" alt="">
            </div>
            <h1> NEW YORK CITY</h1>
            <h2> {{ titre }} </h2>
            <button> READ STORY </button>
        </div>
    </div>
</template>

<script>
export default {
name: 'Card',
props:{
    img:"",
    titre:""
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post{
    text-align: center;
    width: 570px;
    margin: 0px 10px 110px;
    h1{
        font-family: "Akzidenz-Grotesk BQ";
        text-transform: uppercase;
        font-size: 18px;
        letter-spacing: 0.8px;
        margin-top: 30px;
        margin-bottom: 25px;
    };
    h2{
        font-family: "MillerDisplay";
        padding-right: 20px;
        padding-left: 20px;
        font-size: 36px;
    };
    button{
        cursor: pointer;
        font-family: "Merriweather";
        font-size: 11px;
        font-weight: bold;
        letter-spacing: 2px;
        background: none;
        border: 1px solid black;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 16px;
        padding-bottom: 14px;
        margin-top: 25px;
    }
    button:hover{
        background-color: black;
        color: white;
    }
}
#past{
    border-color: rgb(189, 199, 201);
    img{
        width: 570px;
        height: 380px;
    }
}
</style>
