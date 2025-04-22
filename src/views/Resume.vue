<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Berke Kanlıkılıç</strong>, a software developer based in Istanbul, Türkiye.
      <br />I studied Computer Science (Games Technology) at Nottingham Trent University, and ever since, I've been splitting my time between full-time work and passion projects.
      <br />By day, I help maintain and build new features for a .NET-based web application.
      By night (and weekend), I'm a solo game developer working in Unity — a tool I've used for over 6 years. I also explore Unreal Engine from time to time.
      <br />
      <br />My goal is to go full indie and make game development my full-time path.
      I love the mix of design, storytelling, and logic that game dev demands — and the joy of watching an idea come to life, pixel by pixel.
      <br />
      <br />Outside of dev work, I’m all about traveling, long car trips, camping, fishing, and flight simulators (yes, I can cold start and land a Boeing 747).
      I also have a big soft spot for Japanese food culture — and exploring new places is always on the menu.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="resumes/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <a class="download-link" href="resumes/resume-tr.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> PDF Olarak İndir 🇹🇷</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="/img/avatar.png" alt="Photo of Berke" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work Experience</h2>

      <h3>
        Software Developer
        <span class="company-name"> · Arkman Software LTD</span>
      </h3>
      <h4>April 2024 - Present</h4>
      <div>Contributing to the development and maintenance of a large-scale web application using the .NET Framework. Responsible for implementing new features, improving backend performance, and ensuring long-term stability of the platform. Collaborate closely with cross-functional teams to deliver efficient and scalable software solutions.</div>
      <div class="tech-stack">C#, .NET Framework, ASP.NET MVC, SQL Server, Entity Framework, JavaScript</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Languages</h3>
        <SkillRate name="C#" :rate="5" />
        <SkillRate name="JavaScript" :rate="4" />
        <SkillRate name="SQL" :rate="4" />
        <SkillRate name="TypeScript" :rate="3" />
        <SkillRate name="Python" :rate="2" />
        <SkillRate name="HTML/CSS" :rate="3" />
      </div>

      <div class="skill-set">
        <h3>Gamedev</h3>
        <SkillRate name="Unity (C#)" :rate="5" />
        <SkillRate name="Unreal Engine (Blueprint/C++)" :rate="2" />
        <SkillRate name="Shader Graph / HLSL (Unity)" :rate="3" />
        <SkillRate name="Game Design (System Design & Mechanics)" :rate="4" />
        <SkillRate name="2D & UI Implementation" :rate="4" />
      </div>

      <div class="skill-set">
        <h3>Tools & Frameworks</h3>
        <SkillRate name=".NET Framework" :rate="4" />
        <SkillRate name="Entity Framework" :rate="4" />
        <SkillRate name="Visual Studio" :rate="5" />
        <SkillRate name="Git / GitHub" :rate="4" />
        <SkillRate name="Photoshop" :rate="5" />
      </div>

      <div class="skill-set">
        <h3>Web & Fullstack</h3>
        <SkillRate name="ASP.NET MVC" :rate="4" />
        <SkillRate name="Vue 3 + TypeScript" :rate="2" />
        <SkillRate name="REST APIs" :rate="3" />
        <SkillRate name="SQL Server" :rate="4" />
        <SkillRate name="HTML5 / CSS3" :rate="3" />
        <SkillRate name="Bootstrap / LESS" :rate="3" />
      </div>

      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Nottingham Trent University - 2024</h3>
      <h4>Computer Science (Games Technology) BSc (Hons)</h4>
      <div>Specialty in software engineering and game development</div>

      <h3>Bahcesehir University - 2019</h3>
      <h4>Mechatronics Engineering</h4>
      <div>Specialty in Mechanics/Electronics/Software</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Fluent (IELTS 7.2)</div>

      <h3>Turkish</h3>
      <div>My mother tongue</div>


      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Video games</h3>
        <div>I've been playing and making games for as long as I can remember. Some of my all-time favorites are Elden Ring (yes, I could not finish it yet), Satisfactory, Oxygen Not Included, and The Last of Us. I love designing them, studying them, and losing sleep over game mechanics I haven’t fully solved yet.
        </div>

        <h3>I 🧡 Simulation & Flying</h3>
        <div>Big fan of flight simulators — I can fly a Boeing 747 from cold start to landing. I love the realism, the challenge, and that feeling of being up in the skies without leaving my chair.</div>

        <h3>I 💛 Travel & Nature</h3>
        <div>Long road trips, camping under the stars, fishing in silence, and discovering new cultures — that’s my kind of peace. Japan is top of the list for both food and atmosphere, but I’m always up for a new adventure.</div>

        <h3>I 💚 Food</h3>
        <div>Asian food culture has my heart. Sushi, ramen, curry, or hot pot — count me in. I also love trying local flavors when traveling, especially anything that includes rice, spice, or something grilled.</div>

        <h3>I 💙 Creativity</h3>
        <div>Whether it's sketching UI mockups, brainstorming game systems, or just experimenting with design in Unity, I love the creative process. I see every project — no matter how small — as a way to learn and grow.</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default defineComponent({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

.company-name {
  opacity: 0.5;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>