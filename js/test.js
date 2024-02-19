// Enable hidden nav bar
{
    const nav = document.querySelector(".nav-bar");
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
         nav.classList.add("nav--hidden");
      } 
       if (lastScrollY > window.scrollY || window.scrollY < 151) {
        nav.classList.remove("nav--hidden");
      }
  
      lastScrollY = window.scrollY;
    });
  }

  