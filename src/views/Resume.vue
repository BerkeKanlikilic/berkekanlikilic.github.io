<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Berke Kanlıkılıç</strong>, a full-stack software developer and Unity game developer based in Istanbul, Türkiye.
      <br />I studied Computer Science (Games Technology) at Nottingham Trent University.
      <br />
      <br />I currently split my time between <strong>Betech Automation</strong>, where I designed and run a real-time order management platform, and my own studio, <strong>Kura Games</strong>, developing <em>Next Station is...</em> for Steam.
      Before that I integrated airline and supplier APIs into a multi-channel travel booking platform at Arkman Software, and shipped <em>Paddle Together</em> at Glyde Games.
      <br />
      <br />Eligible for UK Skilled Worker sponsorship. Open to relocation or remote.
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
        Solo Game Developer
        <span class="company-name"> · Kura Games</span>
      </h3>
      <h4>
        July 2026 - Present
        · <a href="https://store.steampowered.com/app/4915690" target="_blank">Steam</a>
      </h4>
      <div class="job-context">
        <strong>Next Station is...</strong> — first-person psychological horror in Unity and C#. The player operates the final subway train of the night, inspecting each station for anomalies before deciding whether to stop.
      </div>
      <ul class="job-points">
        <li>Designed and implemented the core decision/consequence system, with escalating penalties for admitting dangerous passengers or incorrectly bypassing legitimate stations.</li>
        <li>Built a modular train movement and station-arrival state system coordinating acceleration, cruising, braking, platform arrival, player interaction, and station progression.</li>
        <li>Integrated Steamworks achievements and player statistics; prepared localisation support for 13 languages.</li>
        <li>Running the project independently across gameplay programming, systems design, UI, audio implementation, localisation, testing, and Steam release preparation.</li>
      </ul>
      <div class="tech-stack">Unity, C#, Steamworks</div>

      <h3>
        Software Developer
        <span class="company-name"> · Betech Automation</span>
      </h3>
      <h4>February 2026 - Present</h4>
      <ul class="job-points">
        <li>Designed, built, and deployed an internal order management and production-tracking platform, replacing WhatsApp-based coordination between the office and production floor with a centralised real-time workflow.</li>
        <li>Developed the full system independently using React/Vite, Node.js/Express, Socket.IO, and SQLite, owning requirements gathering, database design, back-end APIs, front-end UI, deployment, and ongoing maintenance.</li>
        <li>Implemented real-time production queues, order priorities, status tracking, completion and cancellation history, timestamps, search and filtering, and visual alerts for newly received production orders.</li>
        <li>Combined development with day-to-day responsibility for the incoming order pipeline, allowing the system to be designed directly around real factory and sales workflows.</li>
      </ul>
      <div class="tech-stack">React, Vite, Node.js, Express, Socket.IO, SQLite</div>

      <h3>
        Game Developer
        <span class="company-name"> · Independent Team Project</span>
      </h3>
      <h4>December 2025 - June 2026</h4>
      <div class="job-context">
        Single-player medieval kingdom-management game in Unity and C#, combining side-scrolling settlement building, NPC simulation, combat, resource management, and a quest-driven storyline. Three-person team.
      </div>
      <ul class="job-points">
        <li>Designed and integrated an LLM-powered NPC interaction system giving characters persistent personalities and memory, interpreting free-form player dialogue and commands and translating them into structured in-game actions.</li>
        <li>Built the bridge between natural-language interaction and persistent world state, allowing conversations to trigger real simulation events — stat changes, NPC behaviour changes, information propagation, and character removal.</li>
        <li>Implemented core gameplay systems: NPC behaviour and work-state architecture (followers, builders, farmers, archers), enemy waves, day/night progression, health and kingdom damage, economy, progression, save/load, and tutorial.</li>
        <li>Brought the project to a working playable state before development was paused prior to release.</li>
      </ul>
      <div class="tech-stack">Unity, C#, LLM integration</div>

      <h3>
        Unity Game Developer
        <span class="company-name"> · Glyde Games</span>
      </h3>
      <h4>July 2025 - November 2025</h4>
      <ul class="job-points">
        <li>Shipped <strong>Paddle Together</strong> to Steam (2025), contributing from active production through to release; title delisted following the studio's closure.</li>
        <li>Implemented gameplay systems and in-editor tooling in C# and Unity.</li>
        <li>Refactored existing systems for stability and maintainability under production deadlines.</li>
        <li>Worked directly with designers and artists to turn gameplay requirements into implemented features.</li>
        <li>Handled debugging and optimisation across the pre-release cycle.</li>
      </ul>
      <div class="tech-stack">Unity, C#</div>

      <h3>
        Software Developer
        <span class="company-name"> · Arkman Software</span>
      </h3>
      <h4>April 2024 - July 2025</h4>
      <div class="job-context">
        Arkman's online sales platform aggregates airlines, GDSs, consolidators, hotel, transfer, rent-a-car and insurance suppliers into a single booking core, serving B2C websites, B2B sub-agency panels, and corporate travel accounts.
      </div>
      <ul class="job-points">
        <li>Integrated new airline and supplier APIs into the platform's aggregation core, normalising heterogeneous supplier responses into the internal booking model.</li>
        <li>Diagnosed and fixed defects across live supplier integrations, working from third-party documentation and reproducing issues with Postman and manual API testing.</li>
        <li>Built and maintained front-end features across the sales interface.</li>
        <li>Worked in .NET Core against SQL Server; collaborated with QA on release testing and stability.</li>
      </ul>
      <div class="tech-stack">C#, .NET Core, SQL Server, REST APIs, Postman</div>

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
        <SkillRate name="Systems architecture" :rate="4" />
        <SkillRate name="Editor tooling" :rate="4" />
        <SkillRate name="Steamworks" :rate="3" />
      </div>

      <div class="skill-set">
        <h3>Web &amp; Backend</h3>
        <SkillRate name=".NET Core" :rate="4" />
        <SkillRate name="React / Vite" :rate="4" />
        <SkillRate name="Node.js / Express" :rate="4" />
        <SkillRate name="REST APIs" :rate="4" />
        <SkillRate name="SQL Server" :rate="4" />
      </div>

      <div class="skill-set">
        <h3>AI &amp; Tools</h3>
        <SkillRate name="LLM integration" :rate="4" />
        <SkillRate name="Socket.IO" :rate="4" />
        <SkillRate name="Git" :rate="4" />
        <SkillRate name="Postman" :rate="4" />
        <SkillRate name="VS Code" :rate="5" />
      </div>

      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Nottingham Trent University</h3>
      <h4>Sept 2020 – Sept 2023</h4>
      <div>BSc (Hons) Computer Science (Games Technology)</div>
      <div>Games Programming: High 1st</div>

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
