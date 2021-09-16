<template>
  <Layout>
    <div class="project" v-if="info.imgUrl">
      <div class="container">
        <div class="project-header">
          <h1 class="project-title">{{ info.title }}</h1>
          <div class="project-info">
            <div class="categories-container">
              <div class="categories">
                <span class="label">Categories</span>
                <span class="category">{{ info.categories[0] }}</span>
                <span class="category">{{ info.categories[1] }}</span>
              </div>
            </div>
            <div class="year-container">
              <span class="label">Year</span>
              <div>{{ info.date }}</div>
            </div>
          </div>
        </div>
        <div class="content">
          <p>
            <g-image
              :src="info.imgUrl"
              class="thumbnail g-image g-image--lazy g-image--loaded"
              width="2560"
              :alt="info.title"
              />
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import data from '../data/page1.json'

export default {
  metaInfo: {
    title: "About us",
  },
  data(){
    return {
      info: {}
    }
  },
  async mounted() {
    this.info = data.projects.filter(e => e.id === this.$route.params.id)[0]
  }
};
</script>

<style scoped>
.project-header {
  padding: 5vh 0 4rem;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 4rem;
  padding: 0;
}
.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.project-info > div {
  margin-right: 4rem;
}
.project-info > div:last-of-type {
  margin: 0;
}
.category:after {
  content: ", ";
}
.category:last-of-type:after {
  content: "";
}
</style>