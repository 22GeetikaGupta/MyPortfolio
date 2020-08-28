var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

function initialSetup() {
  if (document.getElementsByClassName("MyPortBtn") != null) {
    setTimeout(function() {
      document.getElementsByClassName("MyPortBtn")[0].style.display = 'block';
    }, 1000);
  }
}

function btnclick(){
  document.getElementById("sideNavBar").style.animationName = 'navbar';
  document.getElementById("sideNavBar").style.animationDuration = '0.5s';
  document.getElementById("sideNavBar").style.display = 'flex';
}

function closeBtn(){
  const menuitem = document.querySelectorAll('.menuitem');
  let index1;
  menuitem.forEach((item, index) => {
    if(item.style.display === 'flex'){
      item.style.animationName = 'reverseanim';
      item.style.animationDuration = '0.5s';
      index1 = index;
    }
  });
  document.getElementsByClassName("menuitem")[index1].animationName = 'reverseanim';
  document.getElementsByClassName("menuitem")[index1].animationDuration = '0.5s';
  document.getElementById("sideNavBar").style.animationName = 'navbar';
  document.getElementById("sideNavBar").style.animationDuration = '0.5s';
  setTimeout(()=>{
    document.getElementById("sideNavBar").style.display = 'flex';
    document.getElementsByClassName("menuitem")[index1].style.display = 'none';
  }, 400);
}

function displayMenuItem(){
  // console.log(screen.width + " " + screen.height);
  if(screen.width <= 900){
    document.getElementById("sideNavBar").style.animationName = 'revnavbar';
    document.getElementById("sideNavBar").style.animationDuration = '0.5s';
    setTimeout(()=>{
      document.getElementById("sideNavBar").style.display='none';
    }, 800);
  }
  const menuitem = document.querySelectorAll('.menuitem');
  let index1=[];
  menuitem.forEach((item, index) => {
    if(item.style.display === 'flex'){
      item.style.animationName = 'reverseanim';
      item.style.animationDuration = '0.5s';
      index1.push(index);
    }
  });
  return index1;
}

function displayAbout(){
  let index1 = displayMenuItem();
  if(index1.length!==0){
      setTimeout(()=>{
        for(let i=0; i<index1.length; i++){
          document.getElementsByClassName("menuitem")[index1[i]].style.display = 'none';
        }
        
        document.getElementsByClassName("aboutPage")[0].style.display = 'flex';
        document.getElementsByClassName("aboutPage")[0].style.animationName = 'menuanim';
        document.getElementsByClassName("aboutPage")[0].style.animationDuration = '1s';
      }, 400);
  }
  else{
    document.getElementsByClassName("aboutPage")[0].style.display = 'flex';
    document.getElementsByClassName("aboutPage")[0].style.animationName = 'menuanim';
    document.getElementsByClassName("aboutPage")[0].style.animationDuration = '1s';
  }
}

function displaysome(){
  let index1 = displayMenuItem();
  if(index1.length!==0){
      setTimeout(()=>{
        for(let i=0; i<index1.length; i++){
          document.getElementsByClassName("menuitem")[index1[i]].style.display = 'none';
        }
        
        document.getElementsByClassName("educationPage")[0].style.display = 'flex';
        document.getElementsByClassName("educationPage")[0].style.animationName = 'menuanim';
        document.getElementsByClassName("educationPage")[0].style.animationDuration = '0.5s';
      }, 400);
  }
  else{
    document.getElementsByClassName("educationPage")[0].style.display = 'flex';
    document.getElementsByClassName("educationPage")[0].style.animationName = 'menuanim';
    document.getElementsByClassName("educationPage")[0].style.animationDuration = '0.5s';
  }
  
}

function displayInternship(){
  let index1 = displayMenuItem();
  if(index1.length!==0){
      setTimeout(()=>{
        for(let i=0; i<index1.length; i++){
          document.getElementsByClassName("menuitem")[index1[i]].style.display = 'none';
        }
        
        document.getElementsByClassName("internship")[0].style.display = 'flex';
        document.getElementsByClassName("internship")[0].style.animationName = 'menuanim';
        document.getElementsByClassName("internship")[0].style.animationDuration = '0.5s';
      }, 400);
  }
  else{
    document.getElementsByClassName("internship")[0].style.display = 'flex';
    document.getElementsByClassName("internship")[0].style.animationName = 'menuanim';
    document.getElementsByClassName("internship")[0].style.animationDuration = '0.5s';
  }
}

function displayExperience(){
  let index1 = displayMenuItem();
  if(index1.length!==-1){
      setTimeout(()=>{
        for(let i=0; i<index1.length; i++){
          document.getElementsByClassName("menuitem")[index1[i]].style.display = 'none';
        }
        
        document.getElementsByClassName("experience")[0].style.display = 'flex';
        document.getElementsByClassName("experience")[0].style.animationName = 'menuanim';
        document.getElementsByClassName("experience")[0].style.animationDuration = '0.5s';
      }, 400);
  }
  else{
    document.getElementsByClassName("experience")[0].style.display = 'flex';
    document.getElementsByClassName("experience")[0].style.animationName = 'menuanim';
    document.getElementsByClassName("experience")[0].style.animationDuration = '0.5s';
  }
}

function displayProjects(){
  let index1 = displayMenuItem();
  if(index1.length!==0){
      setTimeout(()=>{
        for(let i=0; i<index1.length; i++){
          document.getElementsByClassName("menuitem")[index1[i]].style.display = 'none';
        }
        
        document.getElementsByClassName("projects")[0].style.display = 'flex';
        document.getElementsByClassName("projects")[0].style.animationName = 'menuanim';
        document.getElementsByClassName("projects")[0].style.animationDuration = '0.5s';
      }, 400);
  }
  else{
    document.getElementsByClassName("projects")[0].style.display = 'flex';
    document.getElementsByClassName("projects")[0].style.animationName = 'menuanim';
    document.getElementsByClassName("projects")[0].style.animationDuration = '0.5s';
  }
}

function displaySkills(){
  let index1 = displayMenuItem();
  if(index1.length!==0){
      setTimeout(()=>{
        for(let i=0; i<index1.length; i++){
          document.getElementsByClassName("menuitem")[index1[i]].style.display = 'none';
        }
        
        document.getElementsByClassName("skills")[0].style.display = 'flex';
        document.getElementsByClassName("skills")[0].style.animationName = 'menuanim';
        document.getElementsByClassName("skills")[0].style.animationDuration = '0.5s';
      }, 400);
  }
  else{
    document.getElementsByClassName("skills")[0].style.display = 'flex';
    document.getElementsByClassName("skills")[0].style.animationName = 'menuanim';
    document.getElementsByClassName("skills")[0].style.animationDuration = '0.5s';
  }
}

function hidemenu(){
  let index = displayMenuItem();
  document.getElementById("sideNavBar").style.animationName = 'revnavbar';
  document.getElementById("sideNavBar").style.animationDuration = '0.5s';
  if(index.length !== 0){
    setTimeout(()=>{
      document.getElementsByClassName("menuitem")[index[0]].style.display = 'none';
      document.getElementById("sideNavBar").style.display = 'none';
      
    }, 400);
    
  }
  else{
    setTimeout(()=>{
      document.getElementById("sideNavBar").style.display = 'none';
    }, 400);
  }
  
}

const showProject = (i => {
  const allproject = document.querySelectorAll('.projectdiscription');
  allproject.forEach(pr => {
    if(pr.style.display === 'block'){
      pr.style.display = none;
    }
  });
    document.getElementsByClassName("projectdiscription")[i].style.animationName = 'discanim';
    document.getElementsByClassName("projectdiscription")[i].style.animationDuration = '0.5s';
    setTimeout(()=>{
      document.getElementsByClassName("projectdiscription")[i].style.display = 'block';
    }, 400);
  
});


function closedesc(i){
  document.getElementsByClassName("projectdiscription")[i].style.animationName = 'revdesc';
  document.getElementsByClassName("projectdiscription")[i].style.animationDuration = '0.5s';
  setTimeout(()=>{
    document.getElementsByClassName("projectdiscription")[i].style.display = 'none';
  }, 400);
  
}

initialSetup();