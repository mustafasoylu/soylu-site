<template>
  <router-link
    v-if="!isExternal(normalizedLink)"
    class="nav-link"
    :to="normalizedLink"
    :exact="exact"
  >
    <slot />
  </router-link>
  <a
    v-else
    :href="normalizedLink"
    class="nav-link external"
    :target="
      isMailto(normalizedLink) || isTel(normalizedLink) ? null : '_blank'
    "
    :rel="
      isMailto(normalizedLink) || isTel(normalizedLink)
        ? null
        : 'noopener noreferrer'
    "
  >
    <slot />
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from './utils';

export default {
  props: {
    link: {
      required: true,
    },
  },

  computed: {
    normalizedLink() {
      return ensureExt(this.link);
    },

    exact() {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(
          (rootLink) => rootLink === this.normalizedLink
        );
      }
      return this.normalizedLink === '/';
    },
  },

  methods: {
    isExternal,
    isMailto,
    isTel,
  },
};
</script>

<style lang="stylus">
.nav-link
  color $darkTextColor

.nav-link
  &:hover, &.router-link-active
    color $accentColor
</style>
