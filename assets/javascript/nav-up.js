let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

const hasScrolled = () => {
  window.addEventListener("scroll", function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.style.top="-140px";
    } else {
      navbar.style.top="0px";
    };

    lastScrollTop = scrollTop;
  });
};

export { hasScrolled };
