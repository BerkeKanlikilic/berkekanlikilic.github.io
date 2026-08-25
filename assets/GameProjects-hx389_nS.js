var b=Object.defineProperty;var w=(e,s,a)=>s in e?b(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a;var o=(e,s,a)=>w(e,typeof s!="symbol"?s+"":s,a);import{e as m,_ as h,i as k,w as j,c as l,g as C,a as t,t as v,n as d,T as $,o as n,d as f,F as _,f as D,r as y,j as P}from"./index-vcuTgx_r.js";const S=m({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(e){console.log("fetching image "+e)}}}),B="/img/close.png",T={key:0},I={class:"dialog-title"},L={class:"dialog-content"},U=["innerHTML"],F={class:"dialog-bottom"};function G(e,s,a,c,g,p){return n(),k($,{name:"fade"},{default:j(()=>[e.visible?(n(),l("div",T,[s[3]||(s[3]=t("div",{class:"overlay"},null,-1)),t("div",{class:"dialog",style:d({"background-color":e.color})},[t("h1",I,v(e.title),1),t("div",{onClick:s[0]||(s[0]=r=>e.$emit("close")),class:"dialog-close"},s[2]||(s[2]=[t("img",{src:B},null,-1)])),t("div",L,[t("div",{innerHTML:e.htmlContent},null,8,U),t("div",F,[t("a",{onClick:s[1]||(s[1]=r=>e.$emit("close")),class:"dialog-close-button"},"Close")])])],4)])):C("",!0)]),_:1})}const M=h(S,[["render",G],["__scopeId","data-v-35c70691"]]);class u{constructor(s,a,c,g,p="#000000",r=!1,i=!1){o(this,"id");o(this,"name");o(this,"htmlDescription");o(this,"iconUrl");o(this,"isWide");o(this,"isHigh");o(this,"accentColor");this.id=s,this.name=a,this.htmlDescription=g,this.iconUrl=c,this.isHigh=r,this.isWide=i,this.accentColor=p}}const W=m({name:"ProjectsList",components:{ProjectDetailsOverlay:M},props:{projects:{type:Array,required:!0}},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails(e){this.popupTitle=e.name,this.popupColor=e.accentColor,this.popupContent=e.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),E={class:"projects-list"},N=["onClick"],H={class:"title-text"};function O(e,s,a,c,g,p){const r=y("ProjectDetailsOverlay");return n(),l("div",null,[t("div",E,[(n(!0),l(_,null,D(e.projects,i=>(n(),l("div",{key:i.id,onClick:q=>e.showDetails(i),class:P(["project-item",{wide:i.isWide,high:i.isHigh}])},[t("div",{class:"project-item-image",style:d({"background-image":"url("+i.iconUrl+")"})},null,4),t("div",{class:"title-bar",style:d({"background-color":i.accentColor+"DD"})},[t("div",H,v(i.name),1)],4)],10,N))),128))]),f(r,{onClose:s[0]||(s[0]=i=>e.showPopup=!1),visible:e.showPopup,title:e.popupTitle,htmlContent:e.popupContent,color:e.popupColor},null,8,["visible","title","htmlContent","color"])])}const z=h(W,[["render",O],["__scopeId","data-v-a12c01d7"]]),A=[new u("game-1","Big Bean's Coffee Problem","/img/projects/game-1/game-1-icon.png",`
    <div class="paragraph">
      <i><a href="https://itch.io/jam/magara-jam-3" target="_blank">Magara Jam #3</a> (2021) – Theme: System Error</i>
      <hr>
      In this chaotic and satirical strategy game, you sit in a spinning chair, juggling three screens and a mission:<br/>
      <strong>Buy every last coffee bean on Earth</strong>.
    </div>
  
    <div class="paragraph">
      One screen tracks the volatile <strong>crypto markets</strong>, another lets you <strong>engineer and monetize a global virus</strong> (yes, while also selling the cure), and the third gives you the power to <strong>purchase entire continents</strong>. Why? Because Big Bean wants coffee, and nothing will stand in the way.
    </div>
  
    <div class="paragraph">
      Built solo in just <strong>12 hours</strong> during a 72-hour game jam (while moving countries), this project was a crash course in <strong>rapid prototyping</strong>, <strong>UI juggling</strong>, and letting wild ideas fly. Everything—from mechanics to art—is original, except the music (royalty-free).
    </div>
  
    <div class="paragraph">
      It’s weird. It’s broken. <strong>It’s mine.</strong>
    </div>
  
    <div class="paragraph">
      <h3>Main Features:</h3>
      <ul>
        <li>Multi-screen interaction with unique mechanics</li>
        <li>Simplified real-time crypto and virus simulations</li>
        <li>Built under 12 hours during a game jam</li>
      </ul>
    </div>
  
    <div class="paragraph center">
      <div class="notice">
        Windows build available on <a href="https://berkekanlikilic.itch.io/bigbrotherscoffeeproblem" target="_blank">itch.io</a>.
      </div>
    </div>
  
    <hr>
  
    <div class="paragraph center">
      <img class="pc-screenshot" src="/img/projects/game-1/game-1-ss-1.png" alt="Big Bean's Coffee Problem Screenshot" />
      <img class="pc-screenshot" src="/img/projects/game-1/game-1-ss-2.png" alt="Big Bean's Coffee Problem Screenshot" />
    </div>
  `,"#c10606"),new u("game-2","The Last Faith","/img/projects/game-2/game-2-icon.png",`
      <div class="paragraph">
        <strong>Genre:</strong> Serious Game – Climate Awareness</br>
        <strong>Built for:</strong> ISYS30321: Serious Games (Nottingham Trent University)</br>
        <strong>Tools:</strong> Unity, 2D UI Systems</br>
        
        <hr>
    
        <strong>The Last Faith</strong> is a UI-driven simulation game developed as part of an academic project focused on climate change. You play as an AI system tasked with <strong>saving Nottingham from ecological collapse</strong>. Each week, you allocate limited processing power to tasks — from researching renewable energy to improving waste systems.
      </div>
      <div class="paragraph">
        Every decision shapes your progress: tasks reward you with more processing power, research points, and unlocks. You'll need to strategically plan your upgrades and fulfill various <strong>UN Sustainable Development Goals (SDGs)</strong> to succeed.
      </div>
      <div class="paragraph">
        Developed entirely in 2D UI, the game replicates the interface of a futuristic AI console, encouraging players to think critically about <strong>resource allocation</strong>, optimization, and sustainability — all through a serious-game lens.
      </div>
      <div class="paragraph">
        <h3>Main features:</h3>
        <ul>
          <li>Fully UI-driven gameplay mimicking a futuristic operating system</li>
          <li><strong>Modular task system</strong> for expandability</li>
          <li>Week-based simulation with dynamic resource allocation</li>
        </ul>
      </div>
    
      <div class="paragraph center">
        <div class="notice">
          Windows build available on <a href="https://berkekanlikilic.itch.io/the-last-faith" target="_blank">itch.io</a>.
        </div>
      </div>
    
      <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/game-2/game-2-ss-1.png" alt="The Last Faith Screenshot" />
        <img class="pc-screenshot" src="/img/projects/game-2/game-2-ss-2.png" alt="The Last Faith Screenshot" />
        <img class="pc-screenshot" src="/img/projects/game-2/game-2-ss-3.png" alt="The Last Faith Screenshot" />
      </div>
    `,"#5a78af")],V=m({name:"GameProjects",components:{ProjectsList:z},data:function(){return{projects:A}}});function Y(e,s,a,c,g,p){const r=y("ProjectsList");return n(),l("div",null,[s[0]||(s[0]=t("h1",null,"Games",-1)),s[1]||(s[1]=t("div",{style:{"margin-bottom":"30px"}}," These are some games I developed — whether for release, game jams, university projects, or simply to demonstrate my skills in Unity. ",-1)),f(r,{projects:e.projects},null,8,["projects"])])}const Q=h(V,[["render",Y]]);export{Q as default};
