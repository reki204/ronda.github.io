// モバイルメニュー
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const textArea = document.querySelector('.text__area');
const nav = document.querySelector('.mb-nav');
const links = document.querySelectorAll('a') 
openMenu.addEventListener('click', () => {
  nav.style.opacity = 1;
  textArea.style.zIndex = -1;
})
closeMenu.addEventListener('click', () => {
  nav.style.opacity = 0;
  textArea.style.zIndex = 0;
})

// フェードインアニメーション
const sections = document.querySelectorAll('section');
const cb = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("inview");
      observer.unobserve(entry.target);
    } 
  });
};
const options = {
  root: null,
  rootMargin: '-10% 0px',
  threshold: 0
};
const io = new IntersectionObserver(cb, options);
sections.forEach(section => {
  io.observe(section)
});
