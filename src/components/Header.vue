<template>
  <div class="header" ref="headerRef">
    <div class="nav-bar">
      <router-link to="/">About me</router-link>

      <router-link to="/game-projects">Games</router-link>
      <!-- <router-link to="/other-projects">Other Projects</router-link> -->
      <router-link to="/learning-lab">Learning Lab</router-link>

      <!-- <div class="dropdown" @click="toggleDropdown">
        <span class="dropdown-toggle">
          Projects <span class="arrow">{{ isOpen ? '⇂' : '↾' }}</span>
        </span>
        <div class="dropdown-menu" v-if="isOpen">
          <router-link to="/game-projects">Games</router-link>
          <router-link to="/other-projects">Other Projects</router-link>
          <router-link to="/learning-lab">Learning Lab</router-link>
        </div>
      </div> -->

      <router-link to="/resume">Resume</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const isOpen = ref(false);
    const headerRef = ref<HTMLElement | null>(null);

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.value &&
        !headerRef.value.contains(event.target as Node)
      ) {
        isOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      isOpen,
      toggleDropdown,
      headerRef,
    };
  },
});
</script>

<style scoped lang="less">
@import '../css/variables.less';

.header {
  width: 100%;
}

.nav-bar {
  text-align: right;
  padding: 20px;
  line-height: 3em;
  position: relative;
}

a {
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
  color: @textColor;
  text-decoration: none;
}

.router-link-exact-active {
  border-bottom: 2px solid @textColor;
}

.dropdown {
  display: inline-block;
  position: relative;
  user-select: none;

  .dropdown-toggle {
    cursor: pointer;
    text-transform: uppercase;
    margin-left: 15px;
    margin-right: 15px;
    padding-bottom: 8px;
    display: inline-block;
  }

  .arrow {
    font-size: 0.8em;
    color: @textColor;
  }

  .dropdown-menu {
    position: absolute;
    top: 2.5em;
    left: 50%;
    transform: translateX(-50%);
    background-color: @contentBgColor;
    padding: 10px;
    border: 1px solid #444;
    border-radius: 4px;
    z-index: 999;

    a {
      display: block;
      margin: 5px 0;
      text-transform: uppercase;
      padding: 5px 10px;
      white-space: nowrap;
      color: @textColor;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

@media only screen and (max-width: 620px) {
  .nav-bar {
    line-height: 2em;
  }

  a {
    margin-left: 9px;
    margin-right: 9px;
    padding-bottom: 0px;
  }
}
</style>
