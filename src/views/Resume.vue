<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Berke Kanlıkılıç</strong>, a Unity game developer and software engineer based in Istanbul, Türkiye.
      <br />I studied Computer Science (Games Technology) at Nottingham Trent University.
      <br />
      <br />I currently split my time between building an internal ERP platform as sole developer at <strong>Betech Automation</strong>, and developing <em>Next Station Is...</em>, an upcoming Steam horror game, as a solo developer at <strong>Kura Games</strong>.
      I previously shipped <em>Paddle Together</em> at Glyde Games, and worked on .NET Core back-end systems at Arkman Software.
      <br />
      <br />Open to relocation to Sweden / EU. Work permit sponsorship required.
      <br />
      <br />Outside of dev work, I’m all about traveling, long car trips, camping, fishing, and flight simulators (yes, I can cold start and land a Boeing 747).
      I also have a big soft spot for Japanese food culture — and exploring new places is always on the menu.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="resumes/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
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
        <span class="company-name"> · Betech Automation</span>
      </h3>
      <h4>February 2026 - Present</h4>
      <ul class="job-points">
        <li>Designed and developed an internal ERP platform as the sole developer, supporting order, production, inventory, invoicing, and customer-account workflows for a manufacturing company.</li>
        <li>Owned the system end-to-end across data modelling, business logic, and user-facing workflows, including multi-currency invoices, payments, credit notes, customer ledgers, and role-based permissions.</li>
        <li>Built a separate internal reporting service in Python/FastAPI over Logo Wings ERP SQL data, surfacing sales, payment, pricing, and customer-activity insights for day-to-day business decisions.</li>
      </ul>
      <div class="tech-stack">Python, FastAPI, SQL, ERP</div>

      <h3>
        Unity Game Developer
        <span class="company-name"> · Glyde Games</span>
      </h3>
      <h4>July 2025 - November 2025</h4>
      <ul class="job-points">
        <li>Contributed to <strong>Paddle Together</strong>, a commercially released Steam title, from active production through final release.</li>
        <li>Implemented and maintained gameplay systems, in-editor tools, and technical features using Unity and C#.</li>
        <li>Investigated gameplay and performance issues, contributing debugging, optimization, and maintainability improvements during production.</li>
        <li>Collaborated closely with designers and artists to translate gameplay requirements into practical shipped implementations.</li>
      </ul>
      <div class="tech-stack">Unity, C#</div>

      <h3>
        Software Developer
        <span class="company-name"> · Arkman Software</span>
      </h3>
      <h4>April 2024 - July 2025</h4>
      <ul class="job-points">
        <li>Designed and maintained .NET Core back-end systems and SQL Server databases for production software.</li>
        <li>Improved API performance and reliability through code improvements, debugging, and SQL query optimization.</li>
        <li>Collaborated with QA and design teams to deliver stable, tested releases, with exposure to CI/CD pipelines and cloud deployment workflows.</li>
      </ul>
      <div class="tech-stack">C#, .NET Core, SQL Server, REST APIs</div>

      <h2>Selected Project</h2>

      <h3>
        Solo Developer
        <span class="company-name"> · Kura Games</span>
      </h3>
      <h4>
        July 2026 - Present
        · <a href="https://store.steampowered.com/app/4915690" target="_blank">Steam</a>
      </h4>
      <div class="job-context">
        <strong>Next Station Is...</strong> — upcoming PC horror game. First-person psychological horror in Unity (C#) built around a subway-driver observation and decision loop. The Steam store page is live and the game is in active development.
      </div>
      <ul class="job-points">
        <li>Implemented the core train/station flow using state-driven gameplay logic, including train movement, station arrival and departure, and player Open/Bypass decisions.</li>
        <li>Built cab interaction and hover-feedback systems and structured the train, tunnel, and platform gameplay setup for repeated station encounters.</li>
        <li>Own gameplay programming, systems design, technical problem-solving, content integration, and overall technical direction as a solo developer.</li>
      </ul>
      <div class="tech-stack">Unity, C#</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Programming</h3>
        <SkillRate name="C#" :rate="5" />
        <SkillRate name="Python" :rate="4" />
        <SkillRate name="SQL" :rate="4" />
        <SkillRate name="JavaScript" :rate="4" />
        <SkillRate name="C++" :rate="2" />
      </div>

      <div class="skill-set">
        <h3>Game Development</h3>
        <SkillRate name="Unity" :rate="5" />
        <SkillRate name="Gameplay systems" :rate="5" />
        <SkillRate name="In-editor tooling" :rate="4" />
        <SkillRate name="Rapid prototyping" :rate="4" />
        <SkillRate name="Debugging &amp; optimization" :rate="4" />
      </div>

      <div class="skill-set">
        <h3>Software Engineering</h3>
        <SkillRate name=".NET Core" :rate="4" />
        <SkillRate name="FastAPI" :rate="4" />
        <SkillRate name="REST APIs" :rate="4" />
        <SkillRate name="SQL Server" :rate="4" />
        <SkillRate name="Git" :rate="4" />
      </div>

      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Nottingham Trent University</h3>
      <h4>Sept 2021 – Sept 2023</h4>
      <div>BSc (Hons) Computer Science (Games Technology)</div>
      <div>Nottingham, United Kingdom</div>
      <div>Relevant modules: Games Programming (High 1st), Software Development, AI Fundamentals, Applied Mathematics</div>

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

        <h3>Simulation &amp; Flying</h3>
        <div>Big fan of flight simulators — I can fly a Boeing 747 from cold start to landing. I love the realism, the challenge, and that feeling of being up in the skies without leaving my chair.</div>

        <h3>Travel &amp; Nature</h3>
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

.job-context {
  max-width: 800px;
  margin-top: 10px;
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
