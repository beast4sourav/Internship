  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const span1 = document.getElementById('span1');
  const span2 = document.getElementById('span2');
  const span3 = document.getElementById('span3');
  let menuOpen = false;

  menuToggle.addEventListener('click', () => {
      menuOpen = !menuOpen;
      
      if (menuOpen) {
          mobileMenu.style.display = 'block';
          setTimeout(() => {
              mobileMenu.classList.remove('-translate-x-full');
              mobileMenu.classList.add('translate-x-0');
          }, 10);
          
          span1.style.transform = 'rotate(45deg) translate(5px, 5px)';
          span2.style.opacity = '0';
          span3.style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
          mobileMenu.classList.remove('translate-x-0');
          mobileMenu.classList.add('-translate-x-full');
          setTimeout(() => {
              mobileMenu.style.display = 'none';
          }, 300);
          
          span1.style.transform = 'none';
          span2.style.opacity = '1';
          span3.style.transform = 'none';
      }
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('#mobileMenu a').forEach(link => {
      link.addEventListener('click', () => {
          menuOpen = false;
          mobileMenu.classList.remove('translate-x-0');
          mobileMenu.classList.add('-translate-x-full');
          setTimeout(() => {
              mobileMenu.style.display = 'none';
          }, 300);
          
          span1.style.transform = 'none';
          span2.style.opacity = '1';
          span3.style.transform = 'none';
      });
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });

  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          navbar.classList.add('shadow-xl');
      } else {
          navbar.classList.remove('shadow-xl');
          navbar.classList.add('shadow-md');
      }
  });

  // Skill Bar Animation using Intersection Observer
  const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
  };

  const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const progressBars = entry.target.querySelectorAll('.skill-progress');
              progressBars.forEach(bar => {
                  const progress = bar.getAttribute('data-progress');
                  setTimeout(() => {
                      bar.style.width = progress + '%';
                  }, 100);
              });
              skillObserver.unobserve(entry.target);
          }
      });
  }, observerOptions);

  const skillsSection = document.querySelector('#skills');
  if (skillsSection) {
      skillObserver.observe(skillsSection);
  }

  // Form Submission Handler
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Display success message
      alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
      
      // Reset form
      contactForm.reset();
  });
  