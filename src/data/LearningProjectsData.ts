import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("learning-1", "Tic-Tac-Toe", "img/projects/learning-1/tictactoe-icon-2.png", 
        `
        <div class="paragraph">
          <strong>Tic-Tac-Toe</strong> is a simple yet complete Unity mini game I built to learn and practice the fundamentals of Unity and C# scripting.
          It was a hands-on exercise to understand game flow, UI updates, and logic implementation.
        </div>
        
        <div class="paragraph">
          <strong>Main Features:</strong>
          <ul>
            <li>Fully playable 2-player Tic-Tac-Toe game</li>
            <li>Win and draw detection</li>
            <li>Board reset functionality</li>
            <li>Clean, readable C# scripts</li>
            <li>Dynamic UI grid updates</li>
          </ul>
        </div>
        
        <div class="paragraph">
          <strong>What I Learned:</strong>
          <ul>
            <li>How to create and manage UI elements dynamically in Unity</li>
            <li>Using 'Button' components and event listeners in C#</li>
            <li>Organizing code using basic object-oriented practices</li>
            <li>Implementing a simple but functional game state system</li>
            <li>Debugging logic flow and ensuring the game loop resets cleanly</li>
          </ul>
        </div>

        <div class="paragraph">
          <div class="notice">
            Windows build available on <a href="#" target="_blank">itch.io</a>.
            Source code available on <a href="#" target="_blank">GitHub</a>.
          </div>
        </div>
        
        <div class="paragraph center">
          <img class="phone-screenshot" src="img/projects/learning-1/tictactoe-ss-4.png" alt="Tic-Tac-Toe Screenshot" />
          <img class="phone-screenshot" src="img/projects/learning-1/tictactoe-ss-1.png" alt="Tic-Tac-Toe Screenshot" />
          <img class="phone-screenshot" src="img/projects/learning-1/tictactoe-ss-2.png" alt="Tic-Tac-Toe Screenshot" />
          <img class="phone-screenshot" src="img/projects/learning-1/tictactoe-ss-3.png" alt="Tic-Tac-Toe Screenshot" />
          <img class="phone-screenshot" src="img/projects/learning-1/tictactoe-ss-5.png" alt="Tic-Tac-Toe Screenshot" />
        </div>
        `, "#23bd69")
];