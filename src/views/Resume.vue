<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Berke Kanlıkılıç</strong>, a Unity game developer based in Istanbul, Türkiye.
      <br />I studied Computer Science (Games Technology) at Nottingham Trent University, and have 6+ years of hands-on experience building gameplay systems, tools, and interactive features in C#.
      <br />I previously worked at Glyde Games, contributing to the full development cycle of Paddle Together — from production through to Steam release.
      I am currently developing my own game as a solo developer, handling gameplay programming, systems design, and overall project direction.
      <br />
      <br />I love the mix of design, storytelling, and logic that game dev demands — and the joy of watching an idea come to life, pixel by pixel.
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
        Unity Game Developer
        <span class="company-name"> · Glyde Games</span>
      </h3>
      <h4>July 2025 - November 2025</h4>
      <ul class="job-points">
        <li>Contributed to the development of Paddle Together, a commercially released game on Steam.</li>
        <li>Worked on gameplay systems, in-editor tools, and technical features using C# and Unity.</li>
        <li>Supported the project through the full development lifecycle, from active production to final release.</li>
        <li>Improved existing systems for maintainability, stability, and scalability.</li>
        <li>Collaborated closely with designers and artists to turn gameplay requirements into practical technical solutions.</li>
        <li>Worked on debugging, optimization, and feature implementation in a production environment.</li>
      </ul>
      <div class="tech-stack">Unity, C#</div>

      <h3>
        Software Developer
        <span class="company-name"> · Arkman Software</span>
      </h3>
      <h4>April 2024 - July 2025</h4>
      <ul class="job-points">
        <li>Designed and maintained .NET Core back-end systems and SQL Server databases.</li>
        <li>Improved API performance and reliability through optimized code and query design.</li>
        <li>Collaborated with QA and design teams to deliver stable, tested software releases.</li>
        <li>Gained exposure to CI/CD pipelines and cloud deployment fundamentals.</li>
      </ul>
      <div class="tech-stack">C#, .NET Core, SQL Server, REST APIs</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Languages</h3>
        <SkillRate name="C#" :rate="5" />
        <SkillRate name="JavaScript" :rate="4" />
        <SkillRate name="SQL" :rate="4" />
        <SkillRate name="Python" :rate="3" />
        <SkillRate name="C++" :rate="2" />
      </div>

      <div class="skill-set">
        <h3>Game Development</h3>
        <SkillRate name="Unity" :rate="5" />
        <SkillRate name="Gameplay programming" :rate="5" />
        <SkillRate name="Tool development" :rate="4" />
        <SkillRate name="Systems architecture" :rate="4" />
        <SkillRate name="Debugging & optimization" :rate="4" />
      </div>

      <div class="skill-set">
        <h3>Frameworks & Tools</h3>
        <SkillRate name="Git" :rate="4" />
        <SkillRate name="REST APIs" :rate="4" />
        <SkillRate name="React" :rate="3" />
        <SkillRate name=".NET Core" :rate="4" />
        <SkillRate name="Visual Studio / VS Code" :rate="5" />
      </div>

      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Nottingham Trent University</h3>
      <h4>Sept 2021 – Sept 2023</h4>
      <div>BSc (Hons) Computer Science (Games Technology)</div>
      <div>Modules: Games Programming (High 1st), Software Development, AI Fundamentals, Applied Mathematics</div>

      <h3>Bahcesehir University - 2019</h3>
      <h4>Mechatronics Engineering</h4>
      <div>Specialty in Mechanics/Electronics/Software</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Professional working proficiency</div>

      <h3>Turkish</h3>
      <div>Native proficiency</div>


      <h2>Besides...</h2>
      <div>
        <h3>Video games</h3>
        <div>I've been playing and making games for as long as I can remember. Some of my all-time favorites are Elden Ring (yes, I could not finish it yet), Satisfactory, Oxygen Not Included, and The Last of Us. I love designing them, studying them, and losing sleep over game mechanics I haven’t fully solved yet.
        </div>

        <h3>Simulation & Flying</h3>
        <div>Big fan of flight simulators — I can fly a Boeing 747 from cold start to landing. I love the realism, the challenge, and that feeling of being up in the skies without leaving my chair.</div>

        <h3>Travel & Nature</h3>
        <div>Long road trips, camping under the stars, fishing in silence, and discovering new cultures — that’s my kind of peace. Japan is top of the list for both food and atmosphere, but I’m always up for a new adventure.</div>

        <h3>Food</h3>
        <div>Asian food culture has my heart. Sushi, ramen, curry, or hot pot — count me in. I also love trying local flavors when traveling, especially anything that includes rice, spice, or something grilled.</div>

        <h3>Creativity</h3>
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

.job-points {
  max-width: 800px;
  margin: 10px 0 0 0;
  padding-left: 20px;
}

.job-points li {
  margin-bottom: 6px;
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