<template>
  
  <div class="home">
    <div class="section1">
      <Article description="I'll be partnering with Headstrong Project to tell the stories of American veterans from the wars in Iraq and Afghanistan." badge="Invisible Wounds" big_title="Invisible Wounds" text="I know that many people have strong opinions about America’s involvement in Iraq and Afghanistan. But as we meet the individuals behind the uniforms, and seek to understand their stories, I’m hoping we can momentarily put those politics aside. This is a great group of people who served and sacrificed at the request of their country. And I’m very thankful that they’ve volunteered to share their stories."></Article>
    </div>
    <section>
      <section style="display: flex; flex-direction: row; justify-content: center; padding-top: 100px;">
        <Card img="@/assets/7.jpg" titre="“I was an art student. I loved the human body. I always thought it was so beautiful.”"/>
        <Card img="@/assets/8.jpg" titre="“At one point I decided that I was going to try everything possible to feel better.”" style="margin-top: 30px;"/>
      </section>
      <section style="display: flex; flex-direction: row; justify-content: center;">
        <Card img="@/assets/9.jpg" titre="“I had a good family. I went to a private school. I graduated from a great college.”" style="margin-top: 30px;"/>
        <Card img="@/assets/10.jpg" titre="“We used to drive to school together every single day.’”" />
      </section>
      <section style="display: flex; flex-direction: row; justify-content: center;">
        <Card img="@/assets/11.jpg" titre="“I thought if I never stopped moving, I could hold down my stress.”" style="margin-top: 30px;"/>
        <Card img="@/assets/12.jpg" titre="“In many ways it was the greatest thing I’ve ever done.”" />
      </section>
      <section style="display: flex; flex-direction: row; justify-content: center;">
        <Card img="@/assets/13.jpg" titre="“We were like cogs in a wheel.”" style="margin-top: 30px;"/>
        <Card img="@/assets/14.jpg" titre="“So ‘happy now’ is different than ‘happy then,’ but we do feel happiness again.”" />
      </section>
      <section style="display: flex; flex-direction: row; justify-content: center;">
        <Card img="@/assets/15.jpg" titre="“ It’s a culture where officers eat last and everyone shares their water.”" style="margin-top: 30px;"/>
        <Card img="@/assets/16.jpg" titre="“I know about trauma. And I know the treatment works.”" style="padding-bottom: 50px;"/>
      </section>
    </section>
  </div>
  
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Article from '@/components/Article.vue'
import Footer from '@/components/Footer.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'SeriesView',
  components: {
    Article,
    Footer,
    Card
  },
  
}
</script>

<style scoped>
  section{
    background: #f8f8f8;
  }
</style>