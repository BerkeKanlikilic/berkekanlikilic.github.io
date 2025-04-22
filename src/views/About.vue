<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Berke Kanlıkılıç</strong>, a fullstack software developer and game enthusiast based in Türkiye.<br/>
        I'm also a passionate game developer (mostly solo developments using Unity) and I love discussing, designing and developing apps and games in general.
      </div>

      <div style="margin-top: 20px;">
        I've worked on <router-link to="/game-projects">indie games</router-link> (either to release them, to showcase my capabilities using Unity, or just to play around), <router-link to="/other-projects">non-game projects</router-link>, and contributed to <router-link to="/resume">diverse technical roles</router-link> — from enterprise apps to personal dev kits.  
        I also experiment and build smaller prototypes in my <router-link to="/learning-lab">Learning Lab</router-link>, where I focus on learning new tech or improving specific skills through quick projects.
      </div>


      <div style="margin-top: 40px;">
        I'm currently looking to <strong>join a creative team or studio</strong> where I can contribute my skills and grow as a game developer.<br/>
        You can reach me at <a href="mailto:berke.kanlikilic@gmail.com">berke.kanlikilic@gmail.com</a> or <router-link to="/contact">via the contact page</router-link>.
      </div>
    </div>

    <div class="photo">
      <img src="/img/pixel-circle.png" alt="Avatar of Berke" /> 
    </div>

    <div style="clear:both"></div>
  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}
</style>
