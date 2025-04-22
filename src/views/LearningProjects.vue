<template>
    <div>
      <h1>Learning Lab</h1>
  
      <div style="margin-bottom: 30px;">
        Welcome to the Learning Lab — a space dedicated to hands-on projects created for the sake of learning. Each project here was built with the goal of exploring a new concept, technology, or tool. Some are simple, some are experiments, but all helped me grow as a developer.
      </div>
      <ProjectsList v-bind:projects="projects" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import ProjectsList from "@/components/ProjectsList.vue";
  import learningProjectsData from "@/data/LearningProjectsData.ts";
  
  export default defineComponent({
    name: "LearningProjects",
    components: {
      ProjectsList,
    },
    data: function () {
      return {
        projects: learningProjectsData,
      };
    },
  });
  </script>