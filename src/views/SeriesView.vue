<template>
  <Navbar />
  <div class="home">
    <div class="section1">
      <h2>HUMANS OF NEW YORK</h2>
      <h1>Series</h1>
      <p>These stories focus on specific populations, examining <br> their experiences and the challenges that they face.</p>
    </div>
  </div>
  <Section class="card1" big_title="Invisible Wounds"></Section>
  <SectionLeft class="card2" big_title="Pediatric Cancer"></SectionLeft>
  <Section class="card3" big_title="Inmate Stories"></Section>
  <SectionLeft class="card4" big_title="Syrian Americans"></SectionLeft>
  <Section class="card5" big_title="Refugee Stories"></Section>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Section from '@/components/Section.vue'
import SectionLeft from '@/components/SectionLeft.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'SeriesView',
  components: {
    Navbar,
    Section,
    SectionLeft,
    Footer
  }
}
</script>

<style scoped>
.section1{
  text-align: center !important;
  padding: 55px 0px 90px;
  h2{
    font-family: 'GT Sectra Display Light';
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin: 0.67em 0;
  };
  h1{
    font-family: "Akzidenz-Grotesk BQ";
    font-size: 190px;
    font-weight: 400;
    margin-top: -30px;
    margin-bottom: 20px;
    letter-spacing: 5px;
  };
  p{ 
    font-family: "GT Sectra Display";
    max-width: 800px;
    margin: auto;
    font-size: 32px;
    letter-spacing: 0.3px;
    line-height: 44px;
  }
}
.card1{
  color: rgb(105, 52, 27);
}
.card2{
  color: rgb(210, 28, 34);
  background-color: rgb(203, 208, 214);
  background-image: url('@/assets/2.jpg');
  
}
.card3{
  color: rgb(201, 231, 214);
  background-color: rgb(101, 109, 112);
  background-image: url('@/assets/3.jpg');
  background-position: 35% 50%;
  a:hover{
        color: #000;
        background-color: #fff;
    }
}
.card4{
  color: rgb(198, 106, 31);
  background-color: rgb(222, 223, 227);
  background-image: url('@/assets/4.jpg');
}
.card5{
  color: rgb(0, 0, 0);
  background-color: rgb(205, 206, 208);
  background-image: url('@/assets/5.jpg');
  background-position: 30% 50%;
}
</style>