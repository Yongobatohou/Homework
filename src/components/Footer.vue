<template>
    <div class="footer">
        <img src="@/assets/black.png" alt="">
        <p>More Humans of New York</p>
        <div class="footer_share">
            <a href=""><img src="@/assets/face.png" alt=""></a>
            <a href=""><img src="@/assets/twitter.png" alt=""></a>
            <a href=""><img src="@/assets/insta.png" alt=""></a>
        </div>
    </div>
</template>

<script>
export default {
name: 'Footer',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
    height: 425px;
    background: #000;
    text-align: center;
    padding-top: 70px;
    img{
        margin: auto;
        margin-bottom: 50px;
    };
    p{
        font-family: "GT Sectra Display";
        color: #fff;
        font-size: 45px;
    }
}
    .footer_share{
        margin-top: 20px;
        img{
            margin-left: 10px;
            margin-right: 10px;
        }
    }
</style>
