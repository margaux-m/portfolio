let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

const hasScrolled = () => {
  window.addEventListener("scroll", function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      if (document.body.clientWidth <= 660) {
        navbar.style.top = "-281px";
      } else {
        navbar.style.top = "-141px";
      }
    } else {
      navbar.style.top = "0px";
    };

    lastScrollTop = scrollTop;
  });
};

export { hasScrolled };
