<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">Simplicity. Aesthetics. Value.</h1>
        <h2 class="hero-subtitle">
          Hi there, I'm an independent Digital Designer &amp; Art Director
          focused on digital design for brands that like to have fun.
        </h2>
      </div>
      <div class="projects">
        <template v-for="edge in $page.allProjects.edges">
          <div class="project" :key="edge.node.id">
            <a :href="`/project/${edge.node.id}`" class="project-link">
              <g-image
                :src="edge.node.imgUrl"
                class="thumbnail g-image g-image--loaded"
                width="2560"
                :alt="edge.node.title"
              />
              <h3 class="project-title">{{ edge.node.title }}</h3>
              <div class="categories">
                <span class="category" v-for="tag in edge.node.categories" :key="tag">{{ tag }}</span>
              </div>
            </a>
          </div>
        </template>
      </div>
    </div>
    <div>
      <div class="latest-journals-heading container">
        <span class="label">Latest and greatest</span>
      </div>
      <div class="latest-journals">
        <div class="container">
          <template v-for="edge in $page.allJournals.edges">
            <a :href="`/journal/${edge.node.id}`" class="journal" :key="edge.node.id">
              <h3 class="journal-title">{{ edge.node.title }}</h3>
            </a>
          </template>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allProjects(order: ASC) {
    edges {
      node {
        id
        title
        imgUrl
        categories
      }
    }
  }
  allJournals(order: ASC) {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Dowgen gridsome",
  }
};
</script>

<style scoped>
.hero {
  text-align: center;
  width: 480px;
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 0 8rem;
}
.hero-title {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0 0 2rem;
}
.hero-subtitle,
.hero-subtitle p,
.hero-title p {
  margin: 0;
  padding: 0;
}
.hero-subtitle {
  font-size: 1.15em;
  font-weight: 400;
  line-height: 1.68;
  opacity: 0.6;
}
.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
}
.project {
  grid-column: auto/span 2;
  text-align: center;
}
.project-link {
  text-decoration: none;
}
.thumbnail {
  height: 560px;
  -o-object-fit: cover;
  object-fit: cover;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgba(0, 0, 0, 0.25);
}
.project-title {
  font-size: 1rem;
  color: var(--color-contrast);
  margin: 2rem 0 1rem;
}
.categories {
  font-size: 0.8rem;
  color: var(--color-contrast-1);
}
.category {
  margin-right: 0.8rem;
}
.category:last-of-type {
  margin: 0;
}
.project:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.25);
}
@media (min-width: 920px) {
  .project {
    grid-column: auto/span 1;
  }
  .project:nth-child(3n + 1) {
    grid-column: auto/span 2;
  }
}
.latest-journals-heading {
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: 0.6rem;
  font-weight: 400;
  text-transform: uppercase;
}
.latest-journals {
  max-width: 100%;
  margin: 0 2rem;
  border: 1px solid var(--color-base-1);
}
.latest-journals > .container {
  display: flex;
  flex-wrap: wrap;
}
.journal {
  flex: 0 0 100%;
  display: block;
  padding: 2rem;
  transition: background 0.25s ease;
  text-decoration: none;
  border-bottom: 1px solid var(--color-base-1);
}
.journal:last-of-type {
  border-bottom: 0;
}
.journal:hover {
  background: var(--color-base-1);
}
.journal-title {
  font-size: 1rem;
  line-height: 1.35;
}
@media (min-width: 580px) {
  .journal {
    flex: 0 0 50%;
  }
  .journal:first-child {
    border-right: 1px solid var(--color-base-1);
  }
  .journal:first-child,
  .journal:nth-child(2) {
    border-bottom: 1px solid var(--color-base-1);
  }
  .journal:nth-child(3) {
    border-right: 1px solid var(--color-base-1);
    border-bottom: 0;
  }
}
@media (min-width: 920px) {
  .journal {
    flex: 0 0 25%;
  }
  .journal:first-child,
  .journal:nth-child(2),
  .journal:nth-child(3) {
    border: 0;
    border-right: 1px solid var(--color-base-1);
  }
  .latest-journals {
    margin: 0;
    border-left: 0;
    border-right: 0;
    border-top: 1px solid var(--color-base-1);
    border-bottom: 1px solid var(--color-base-1);
  }
}
</style>