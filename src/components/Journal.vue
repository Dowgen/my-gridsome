<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">
        <div class="journal-header">
          <h1 class="journal-title">
            {{ info.title }}
          </h1>
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span
              ><span class="author-name">{{ info.author }}</span>
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div>{{ info.date }}</div>
            </div>
            <div class="journal-time">
              <span class="label">Time</span>
              <span>{{ info.timeToRead }} min read</span>
            </div>
          </div>
        </div>
        <div class="journal-content" v-html="info.content"></div>
      </div>
    </div>
  </Layout>
</template>

<script>
import data from "../data/page1.json";

export default {
  metaInfo: {
    title: "About us",
  },
  data() {
    return {
      info: {},
    };
  },
  async mounted() {
    this.info = data.journals.filter((e) => e.id === this.$route.params.id)[0];
  },
};
</script>

<style scoped>
.journal-container {
  max-width: 840px;
}
.journal-header {
  padding: 2rem 0 4rem;
}
.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem;
  padding: 0;
}
.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.journal-meta > div {
  margin-right: 4rem;
}
.journal-meta > div:last-of-type {
  margin: 0;
}
</style>
