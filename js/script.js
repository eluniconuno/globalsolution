const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const fullscreenMenu = document.getElementById("fullscreen-menu");
const body = document.body;

if (menuToggle && fullscreenMenu) {
  
  menuToggle.addEventListener("click", () => {
    fullscreenMenu.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
    body.style.overflow = "hidden";
  });

  if (menuClose) {
    menuClose.addEventListener("click", () => {
      fullscreenMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      body.style.overflow = "";
    });
  }

  fullscreenMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      fullscreenMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      body.style.overflow = "";
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && fullscreenMenu.classList.contains("open")) {
      fullscreenMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      body.style.overflow = "";
    }
  });
}

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  if (!header) return;
  if (window.scrollY > 40) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});


const heroVideo = document.querySelector(".hero-video-bg");
if (heroVideo) {
  
  heroVideo.playbackRate = 0.5;
}

const particlesContainer = document.getElementById("hero-particles");

if (particlesContainer) {
  const PARTICLE_COUNT = 18;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const dot = document.createElement("span");
    dot.className = "particle-dot";

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 4;
    const duration = 6 + Math.random() * 6;

    dot.style.left = `${x}%`;
    dot.style.top = `${y}%`;
    dot.style.animationDuration = `${duration}s`;
    dot.style.animationDelay = `${delay}s`;

    particlesContainer.appendChild(dot);
  }
}

const desafioParticles = document.getElementById("desafio-particles");
if (desafioParticles) {
  const PARTICLE_COUNT = 12;
  
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const particle = document.createElement("span");
    particle.className = "desafio-particle";
    
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 4;
    const duration = 4 + Math.random() * 3;
    
    particle.style.left = `${x}%`;
    particle.style.top = `${y}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    desafioParticles.appendChild(particle);
  }
}


window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  
  
  const heroVideo = document.querySelector(".hero-video-bg");
  if (heroVideo) {
    heroVideo.style.transform = `translate(-50%, ${-50 + scrolled * 0.3}%)`;
  }
  
  
  const heroSquare = document.querySelector(".hero-square");
  if (heroSquare) {
    heroSquare.style.transform = `translateY(${scrolled * 0.15}px)`;
  }
});
