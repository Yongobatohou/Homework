<template>
        <nav>
          <a href="/" class="first_a">HUMANS OF <br> NEW YORK</a>
          <ul>
            <li style="list-style: none;"><a href="">STORIES</a></li>
            <li><a href="">COUNTRIES</a></li>
            <li><a href="">SERIES</a></li>
            <li><a href="">SHARE</a></li>
          </ul>
        </nav>
</template>

<script>
export default {
  name: 'Navbar',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

nav{
  position: relative;
  width: 90%;
  color: black;
  border-bottom: solid 1px black;
  margin: auto;
  padding-top: 45px;
  padding-bottom: 30px;
  font-weight: bolder;
  .first_a{
    border-top: solid 1px black;
    border-left: solid 1px black;
    border-right: solid 1px black;
    float: left;
    position: absolute;
    text-align: left;
    left: 0px;
    top: 40px;
    text-decoration: none;
    color: black;
    padding: 10px;
    margin-top: -22px;
  }
  ul{
    display: flex;
    float: right;
    li{
      margin: 0px 15px;
      a{
        text-decoration: none;
        color: black;
        cursor: pointer;
      };
      a:hover{
        color: rgb(212, 86, 86);
      }
    }
  }
}
</style>
