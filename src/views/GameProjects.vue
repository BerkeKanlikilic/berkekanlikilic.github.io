<template>
  <div>
    <h1>Games</h1>

    <div style="margin-bottom: 30px;">
      These are some games I developed — whether for release, game jams, university projects, or simply to demonstrate my skills in Unity.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <!-- <div style="margin-top: 20px;">
      More on <a target="_blank" href="https://berkekanlikilic.itch.io">berkekanlikilic.itch.io</a> (Even some stuff I'm not proud of 🙈)
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default defineComponent({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>