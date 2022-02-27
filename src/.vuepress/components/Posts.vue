<template>
  <div class="post-container">
    <router-link v-for="page in pages" :to="page.path" :key="page.path">
      <div class="post-card">
        <div class="image-box">
          <img
            class="article-image"
            v-if="page.frontmatter.img_src"
            v-bind:src="require('../public/images/' + page.frontmatter.img_src)"
          />

          <img class="article-image" v-else src="../public/images/hero.jpg" />
        </div>
        <div class="page-detail">
          <div class="page-title">{{ page.title }}</div>
          <div class="page-description">{{ page.frontmatter.description }}</div>
          <div class="page-author">Author: {{ page.frontmatter.author }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pages: [],
    };
  },
  props: ['navTab'],
  mounted() {
    this.$site.pages.forEach((page) => {
      if (
        page.frontmatter.type === 'article' &&
        page.frontmatter.navTab === this.navTab
      ) {
        this.pages.push(page);
      }
    });
  },
};
</script>
<style scoped>
.post-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.post-card {
  width: 600px;
  height: 150px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  align-items: center;
}

.image-box {
  width: 150px;
  height: 100%;
}
.article-image {
  /* height: 100%; */
  height: 150px;
}
.page-detail {
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 50%;
}

.page-title {
  font-weight: bold;
  color: black;
  font-size: larger;
  margin-bottom: 1em;
}
.page-description {
  color: grey;
  margin-bottom: 1em;
}
.page-author {
  font-style: italic;
}
</style>
