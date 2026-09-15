import ProjectData from '@/data/ProjectData.ts'

export default [
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
