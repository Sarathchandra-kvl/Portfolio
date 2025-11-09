// Progress bar on scroll with smoother animation
window.addEventListener('scroll', function() {
  const scrollBar = document.getElementById('progress-bar');
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  const scrolled = (winScroll / height) * 100;
  scrollBar.style.width = scrolled + "%";
  
  // Add a subtle glow effect when scrolling
  if (scrolled > 0) {
    scrollBar.style.boxShadow = '0 0 8px rgba(44, 82, 130, 0.5)';
  } else {
    scrollBar.style.boxShadow = 'none';
  }
});

// Highlight navbar items on scroll with debounce for better performance
let ticking = false;

function updateNavOnScroll() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
  ticking = false;
}

const sections = document.querySelectorAll('.main-content section');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateNavOnScroll);
    ticking = true;
  }
});

// Add active class to clicked nav link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove active class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    // Add active class to clicked link
    this.classList.add('active');
    
    // Keep the active class for a short time to ensure it's visible
    setTimeout(() => {
      // After scrolling, the scroll event will update the active class properly
    }, 100);
  });
});

// Fade-in effect for cards with staggered animation
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add staggered delay for each card
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 150);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));

// Enhanced button interactions
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-3px)';
    btn.style.boxShadow = '0px 8px 25px rgba(44, 82, 130, 0.4)';
  });
  
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translateY(0)';
    btn.style.boxShadow = '0px 4px 20px rgba(44, 82, 130, 0.3)';
  });
  
  btn.addEventListener('mousedown', () => {
    btn.style.transform = 'translateY(-1px)';
    btn.style.boxShadow = '0px 4px 15px rgba(44, 82, 130, 0.3)';
  });
  
  btn.addEventListener('mouseup', () => {
    btn.style.transform = 'translateY(-3px)';
    btn.style.boxShadow = '0px 8px 25px rgba(44, 82, 130, 0.4)';
  });
});

// Add subtle animation to profile picture
const profilePic = document.querySelector('.nav-profile-pic');
if (profilePic) {
  profilePic.style.transition = 'all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)';
  
  profilePic.addEventListener('mouseenter', () => {
    profilePic.style.transform = 'scale(1.05)';
    profilePic.style.boxShadow = '0 6px 25px rgba(44, 82, 130, 0.3)';
  });
  
  profilePic.addEventListener('mouseleave', () => {
    profilePic.style.transform = 'scale(1)';
    profilePic.style.boxShadow = '0 4px 20px rgba(44, 82, 130, 0.2)';
  });
}

// Add animation to skill tags
document.addEventListener('DOMContentLoaded', function() {
  const skillTags = document.querySelectorAll('.skills-tags span');
  skillTags.forEach((tag, index) => {
    // Add staggered animation
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(10px)';
    tag.style.transition = 'all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)';
    
    setTimeout(() => {
      tag.style.opacity = '1';
      tag.style.transform = 'translateY(0)';
    }, 300 + (index * 50));
  });
  
  // Add animation to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)';
    
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 500 + (index * 100));
  });
});