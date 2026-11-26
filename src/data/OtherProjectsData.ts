import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("other-spotted", "Spotted", "/img/projects/spotted/spotted-icon.png", `
    <div class="paragraph">
        <strong>Type:</strong> Web App &amp; Background Service<br/>
        <strong>Role:</strong> Solo Developer<br/>
        <strong>Development:</strong> Oct 2026 – Nov 2026<br/>
        <strong>Tools:</strong> TypeScript, Node.js, PostgreSQL, Prisma, Next.js, Discord API, Twitch / Kick / YouTube APIs, Docker, Railway
        <hr>
        <strong>Spotted</strong> finds every stream, video and clip of an indie game on Twitch, Kick and YouTube, and turns them into a moderation queue in Discord. I built it to follow the coverage of my own game, <strong>Next Station is...</strong>, and grew it into a multi-tenant product that other developers could sign up for.
    </div>

    <div class="paragraph">
        It started with a measurement. Across 24,529 streams in the Twitch and Kick categories of the indie games I tracked over a week, only <strong>1 in 3</strong> mentioned the game in its title. Searching titles misses most coverage, so Spotted reads each game's own category and only falls back to title matching for games that don't have a category yet.
    </div>

    <div class="paragraph">
        A background worker polls Twitch and Kick every 90 seconds and YouTube once a day within its free API quota, and records every stream, video, clip and creator in PostgreSQL. Matches go to a Discord channel with buttons to approve and share, approve silently, reject or block the channel. A Next.js dashboard lets anyone sign in with Discord, set up their game in five steps, and browse, moderate and export their coverage. I designed and built every part: the data model and migrations, the matching engine, the platform integrations, the Discord bot, the dashboard, and the deployment.
    </div>

    <div class="paragraph">
        <h3>Main features:</h3>
        <ul>
            <li>Live stream tracking on Twitch and Kick, deduplicated in the database so restarts never post twice</li>
            <li>YouTube search and channel feeds, with a gaming-context rule against false matches</li>
            <li>Title matching that handles hashtags, accents, Roman numerals and mixed Japanese / Latin titles, measured against real stream history (recall 27% → 33%)</li>
            <li>Discord moderation queue with buttons, over the Gateway (no public URL needed)</li>
            <li>Multi-tenant dashboard: Discord sign-in, onboarding wizard, stats, CSV export, English and Turkish</li>
            <li>Category readiness checks through IGDB, Twitch and Kick</li>
            <li>330 automated tests against an in-process PostgreSQL</li>
        </ul>
    </div>

    <div class="paragraph">
        It ran in production from October to November 2026 for about $3–5 a month. Now it is open source under the MIT license, so anyone can host it for their own game.
    </div>

    <div class="paragraph">
        <div class="notice">
        Source code available on <a href="https://github.com/BerkeKanlikilic/spotted" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/spotted/spotted-ss-overview.png" alt="Spotted dashboard overview: approved coverage per day by platform" />
        <img class="pc-screenshot" src="/img/projects/spotted/spotted-ss-moderation.png" alt="Spotted moderation queue" />
        <img class="pc-screenshot" src="/img/projects/spotted/spotted-ss-coverage.png" alt="Spotted coverage feed" />
    </div>
    `, "#1e1452"),

    new ProjectData("other-1", "Simple Shell", "/img/projects/other-1/other-1-icon.png", `
    <div class="paragraph">
        This project was developed as part of a university assignment at Nottingham Trent University. It is a basic shell application for Linux, offering functionalities like user creation, user classification, and other similar tasks. The program includes both built-in and external commands that mimic a traditional Linux shell environment.
    </div>
    
    <div class="paragraph">
        <strong>Key Features:</strong>
        <ul>
            <li><strong>User Management:</strong> Allows the creation of new users and the classification of users.</li>
            <li><strong>CSV-based Storage:</strong> Stores user data in a .csv file in the format &lt;user, pass, boolean&gt;.</li>
            <li><strong>Linux Compatibility:</strong> Designed to run on Linux-based systems. Some features may not function on other operating systems.</li>
            <li><strong>Command Simulation:</strong> Includes a variety of built-in and external commands similar to those found in Linux shells.</li>
        </ul>
    </div>

    <div class="paragraph">
        <strong>How to Run:</strong>
        <ul>
            <li>Fork the project.</li>
            <li>Download the code and ensure you have a .csv file to store user information.</li>
            <li>Run the program on a Linux machine for full compatibility.</li>
        </ul>
    </div>
    
    <div class="paragraph">
        <div class="notice">
        Source code available on <a href="https://github.com/BerkeKanlikilic/Simple-Shell" target="_blank">GitHub</a>.
        </div>
    </div>
    `, "#9B1B30"),

    new ProjectData("other-2", "Pool Table Simulation", "/img/projects/other-2/other-2-icon.png", `
        <div class="paragraph">
            This project, developed in Processing, simulates a pool table where users can interact with various parameters, including table size, ball sizes, hit force, and friction. The simulation realistically models the physics of pool, allowing users to manipulate these factors to observe their effects on gameplay. The balls are detected when they fall into the pockets, providing a dynamic and interactive experience. The project showcases my ability to apply physics concepts in programming while creating engaging simulations.
        </div>
        
        <div class="paragraph">
            <strong>Key Features:</strong>
            <ul>
                <li><strong>Adjustable Table Size</strong>: Modify the size of the pool table.</li>
                <li><strong>Customizable Ball Sizes</strong>: Change the size of the pool balls.</li>
                <li><strong>Variable Hit Force</strong>: Control the force applied to the balls.</li>
                <li><strong>Friction Settings</strong>: Adjust friction levels affecting ball movement.</li>
                <li><strong>Ball Detection</strong>: Detect balls falling into pockets.</li>
            </ul>
        </div>
        
        <div class="paragraph">
            <div class="notice">
            Source code available on <a href="https://github.com/BerkeKanlikilic/Processing-Pool-Table-Simulation" target="_blank">GitHub</a>.
            </div>
        </div>

        <div class="paragraph center">
            <img class="phone-screenshot" src="/img/projects/other-2/other-2-ss-1.png" alt="Pool Table Simulation Screenshot" />
            <img class="phone-screenshot" src="/img/projects/other-2/other-2-ss-2.png" alt="Pool Table Simulation Screenshot" />
            <img class="phone-screenshot" src="/img/projects/other-2/other-2-ss-3.png" alt="Pool Table Simulation Screenshot" />
            <img class="phone-screenshot" src="/img/projects/other-2/other-2-ss-4.png" alt="Pool Table Simulation Screenshot" />
        </div>
        `, "#2E8B57")
];
