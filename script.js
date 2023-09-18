document.querySelectorAll('nav a').forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      const sectionId = this.getAttribute('href');
      const targetSection = document.querySelector(sectionId);
  
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      } else {
        console.error(`Section with ID '${sectionId}' not found.`);
      }
    });
  });
  